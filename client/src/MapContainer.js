import ReactMapBox, { Marker, GeolocateControl } from "react-map-gl";
import styled from "styled-components";
import gendered from "./assets/gendered.png";
import toilet from "./assets/toilet.png";
const washrooms = require("./assets/info");

const MapContainer = ({ handleChange, setFormData, formData }) => {
  const mapClick = (e) => {
    setFormData({
      ...formData,
      lng: e.lngLat.lng,
      lat: e.lngLat.lat,
    });
  };
  const rightClick = () => {
    setFormData({
      ...formData,
      lng: null,
      lat: null,
    });
  };

  if (!washrooms.washrooms) {
    return <h1>Loading</h1>;
  }
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
        onClick={(e) => mapClick(e)}
        onContextMenu={rightClick}
      >
        <GeolocateControl />
        {washrooms.washrooms.map((each) => {
          return (
            <Marker latitude={each.lat} longitude={each.lng} key={each.lat}>
              <div>
                <h4>
                  <button >{each.name}</button>
                </h4>
                <StyledIcon src={toilet} />
              </div>
            </Marker>
          );
        })}
        {formData.lat && (
          <Marker latitude={formData.lat} longitude={formData.lng}></Marker>
        )}
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
`;

export default MapContainer;
