import styled from "styled-components";

const BackgroundWrapper = styled.div`
  background: url(${(props) => props.url});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  height: ${(props) => props.height}vw;
  width: ${(props) => props.width}vw;
`;

export default BackgroundWrapper;
