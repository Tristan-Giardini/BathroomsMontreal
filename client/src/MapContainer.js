import ReactMapBox from "react-map-gl";
import styled from "styled-components";

const MapContainer = () => {
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
      ></ReactMapBox>
    </StyledBox>
  );
};

const StyledBox = styled.div`
width: 200px;
height: 200px;
background-color: aliceblue;
`

export default MapContainer;
