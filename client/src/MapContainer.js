import ReactMapBox, { Marker } from "react-map-gl";
import styled from "styled-components";
import gendered from './assets/gendered.png';
import toilet from './assets/toilet.png';
const washrooms = require('./assets/info');

const MapContainer = () => {
  console.log(washrooms.washrooms);

  if (!washrooms.washrooms){return <h1>Loading</h1>}
  return (
    <StyledBox>
      <ReactMapBox
        mapboxAccessToken="pk.eyJ1IjoiYWxsdGhlcmlnaHRoeXBlIiwiYSI6ImNsYm55cXMyeTBhYnYzcG1xazVsanpiZGUifQ.1qBx_PT7xzE-ryPmmsSTlA"
        initialViewState={{
          longitude: -73.599382,
          latitude: 45.52886,
          zoom: 14,
        }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        {washrooms.washrooms.map((each) => {
          return (
            <Marker latitude={each.lat} longitude={each.lng} key={each.lat}>
              <div>
                {console.log(each)}
                <h4>{each.name}</h4>
                <StyledIcon src={toilet} />
              </div>
            </Marker>
          );
        })}
      </ReactMapBox>
    </StyledBox>
  );
};

const StyledBox = styled.div`
  width: 800px;
  height: 500px;
`;

const StyledIcon = styled.img`
width: 35px;
`

export default MapContainer;
