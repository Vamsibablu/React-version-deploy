import styled from "styled-components";

const H1 = styled.h1`
  color: red;
`;

const DefaultButton = styled.button`
  background-color: #645cfc;
  border: none;
  padding: 10px;
  color: white;
`;

export default function StyledApp() {
  return (
    <div>
      <H1>Styled Components</H1>
      <p>
        Cillum culpa deserunt enim et eiusmod quis proident consequat tempor
        ipsum sunt esse.
      </p>
      <DefaultButton>Click ME!</DefaultButton>
    </div>
  );
}
