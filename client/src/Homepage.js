import MapContainer from "./MapContainer";
import styled from "styled-components";
import Form from "./Form";
import { useState } from "react";
const Homepage = () => {

    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };
  return (
    <StyledHome>
      <MapContainer handleChange={handleChange} setFormData={setFormData} formData={formData}/>
      <Form handleChange={handleChange} formData={formData} />
    </StyledHome>
  );
};

const StyledHome = styled.div`
  margin: 20px auto;
  width: 800px;
  height: 500px;
`;

export default Homepage;
