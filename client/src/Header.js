import styled from 'styled-components';
import gendered from './assets/gendered.png';
import toilet from './assets/toilet.png';
import disabled from './assets/disabled.png';

const Header = () => {
  return (
    <StyledHeader>
      <div>Bathrooms mtl</div>
      <div>
        <img src={gendered} alt="This icon indicates a gendered washroom" />
      </div>
      <div>This is a gendered washroom</div>
      <div>
        <img src={toilet} alt="This icon indicates a gender neutral washroom" />
      </div>
      <div>This is a gender neutral washroom</div>
      <div>
        <img src={disabled} alt="This icon indicates a wheelchair accessible washroom" />
      </div>
      <div>This is an accessible washroom</div>
    </StyledHeader>
  );
}

const StyledHeader = styled.div`
width: 100%;
height: 85px;
background-color: gray;
display:flex;
justify-content: center;
align-items: center;
div{
  margin-right: 20px;
}
img{
  width: 35px
}
`

export default Header;