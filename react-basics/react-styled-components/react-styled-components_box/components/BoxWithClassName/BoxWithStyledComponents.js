import styled from "styled-components";

export default function BoxWithStyledComponents(props) {
  return <ColorBox {...props} />;
}

const ColorBox = styled.div`
  width: 100px;
  height: 100px;
  margin: 2rem;
  background-color: ${(props) => (props.$isBlack ? "black" : "green")};

  &:hover {
    background-color: red;
  }
`;
