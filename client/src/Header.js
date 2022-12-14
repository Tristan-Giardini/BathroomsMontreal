import styled from 'styled-components';

const Header = () => {
  return (
  <StyledHeader>
    <div>Header</div>
  </StyledHeader>
  );
}

const StyledHeader = styled.div`
width: 100%;
height: 85px;
background-color: gray;
`

export default Header;