import styled from "styled-components/macro";
const StyledButton = styled.button`
  height: 50px;
  width: 100px;
  outline: none;
  cursor: pointer;
  border: none;

  position: relative;

  ${({ bgColor, txtColor }) => {
    return `
      background-color: ${bgColor};
      color: ${txtColor};
  `;
  }};
`;
export const Button = ({ children, txtColor, bgColor }) => {
  return (
    <StyledButton txtColor={txtColor} bgColor={bgColor}>
      {children}
    </StyledButton>
  );
};
