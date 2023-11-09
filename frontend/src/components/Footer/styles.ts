import styled from "styled-components";

export const StyledFooter = styled.footer`
  margin-top: auto;
  width: 100%;

  height: 5.875rem;

  background: ${(props) => props.theme.white};
  border-top: 1px solid ${(props) => props.theme.gray};

  display: flex;
  flex-direction: row;

  justify-content: center;
  align-items: center;

  position: absolute;
  bottom: 0;

  span {
    line-height: 1.5;
    text-align: center;
  }
`;
