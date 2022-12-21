import ReactMapBox, { Marker, GeolocateControl, Popup } from "react-map-gl";
import styled from "styled-components";
import gendered from "./assets/gendered.png";
import toilet from "./assets/toilet.png";
import { useState } from "react";
import PopupComponent from "./PopupComponent";
const washrooms = require("./assets/info");


const MapContainer = ({ handleChange, setFormData, formData }) => {
  const [selectedBathroom, setSelectedBathroom] = useState(null);
const bathClick = (e, name, lng, lat) =>{
  e.preventDefault();
  setSelectedBathroom({name: name, lng: lng, lat: lat});
  console.log(selectedBathroom);
}
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
                  <button
                    onClick={(e) => bathClick(e, each.name, each.lng, each.lat)}
                  >
                    {each.name}
                  </button>
                </h4>
                <StyledIcon src={toilet} />
              </div>
            </Marker>
          );
        })}
        {formData.lat && (
          <Marker latitude={formData.lat} longitude={formData.lng}></Marker>
        )}
        {selectedBathroom &&
        <PopupComponent
          latitude={selectedBathroom.lat}
          longitude={selectedBathroom.lng} />
        }
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
