import styled from "styled-components";

export const StyledFooter = styled.footer`
  margin-top: auto;

  height: 5.875rem;

  background: ${(props) => props.theme.white};
  border-top: 1px solid ${(props) => props.theme.gray};

  display: flex;
  flex-direction: row;

  justify-content: center;
  align-items: center;

  span {
    line-height: 1.5;
    text-align: center;
  }
`;
