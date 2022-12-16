import MapContainer from "./MapContainer";
import styled from "styled-components";
const Homepage = () => {
  return ( <StyledHome>
    homepage lol
    <MapContainer/>
  </StyledHome> );
}

const StyledHome = styled.div`
margin: 20px auto;
width: 800px;
height: 500px;
`

export default Homepage;