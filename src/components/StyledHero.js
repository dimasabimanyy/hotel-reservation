import styled from "styled-components";
import defaultImg from "../images/breadcrumb-bg.jpg";

const StyledHero = styled.header`
  min-height: 60vh;
  background: url(${defaultImg}) center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default StyledHero;

// background: url(${(props) => (props.img ? props.img : defaultImg)})
// center/cover no-repeat;
