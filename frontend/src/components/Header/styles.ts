import styled from "styled-components";

export const StyledHeader = styled.header`
  height: 5.875rem;

  border-bottom: 1px solid ${(props) => props.theme.gray};
  background: ${(props) => props.theme.white};

  .content {
    max-width: 80rem;

    padding: 1rem 1.5rem;

    margin: 0 auto;

    display: flex;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .content .textLink {
    padding: 0.625rem 0.75rem;

    margin-right: 1rem;

    text-decoration: none;

    color: ${(props) => props.theme.black};

    transition: 0.2s;
  }

  .content .textLink:hover {
    color: ${(props) => props.theme["blue-400"]};
  }

  .content .containedLink {
    padding: 0.5rem 1.5rem;

    text-decoration: none;

    color: ${(props) => props.theme.white};
    background: ${(props) => props.theme.black};

    border: none;
    border-radius: 8px;

    transition: 0.2s;
  }

  .content .containedLink:hover {
    background: ${(props) => props.theme["blue-400"]};
  }
`;
