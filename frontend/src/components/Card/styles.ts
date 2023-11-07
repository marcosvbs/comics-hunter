import styled from "styled-components";

export const StyledCard = styled.div`
  .link {
    max-width: 14rem;

    text-decoration: none;
    color: ${(props) => props.theme.black};

    display: flex;
    flex-direction: column;

    justify-content: start;
  }

  .link img {
    position: relative;

    transition: 0.2s ease-out;
  }

  .link:hover img {
    transform: translateY(-0.5rem);
  }

  h2 {
    margin: 0.75rem 0 0.25rem;
  }

  &:hover h2 {
    color: ${(props) => props.theme["blue-400"]};
  }

  span {
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
    font-weight: 400;

    color: ${(props) => props.theme.black};
  }
`;
