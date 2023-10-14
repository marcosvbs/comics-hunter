import styled from "styled-components";

export const StyledHomeLink = styled.div`
  .homeLink {
    padding: 0.5rem 1rem;

    margin-right: 1rem;

    text-decoration: none;

    color: ${(props) => props.theme.black};

    display: flex;
    align-items: center;
    gap: 0.25rem;

    transition: 0.2s;
  }

  .homeLink span {
    font-size: 1.5rem;
  }

  .homeLink:hover {
    color: ${(props) => props.theme["blue-400"]};
  }
`;
