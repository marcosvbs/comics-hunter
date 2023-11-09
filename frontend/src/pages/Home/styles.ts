import styled from "styled-components";

export const Container = styled.main`
  max-width: 80rem;

  padding: 6.25rem 1.5rem;

  margin: 0 auto;

  .intro {
    padding-bottom: 6.25rem;

    display: flex;
    flex-direction: column;

    gap: 1.5rem;
  }

  .searchBar {
    display: flex;
    flex-direction: row;

    gap: 1rem;
  }

  .searchBar input {
    max-width: 28.5rem;

    padding: 1rem;

    border: 1px solid ${(props) => props.theme.gray};
    border-radius: 8px;

    flex-grow: 1;
  }

  .searchBar input:focus {
    border: 1px solid transparent;
    outline: 2px solid ${(props) => props.theme["blue-400"]};
  }

  .searchBar button {
    padding: 1rem 1.5rem;

    text-decoration: none;

    color: ${(props) => props.theme.white};
    background: ${(props) => props.theme.black};

    border: none;
    border-radius: 8px;

    cursor: pointer;

    transition: 0.2s;

    flex-grow: 0;
  }

  .searchBar button:hover {
    background: ${(props) => props.theme["blue-400"]};
  }

  .cardsList {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(14rem, auto));
    justify-content: center;

    gap: 1.5rem;
  }

  @media (max-width: 576px) {
    padding: 1.5rem;

    .intro {
      padding-bottom: 2.5rem;
    }

    .searchBar {
      flex-wrap: wrap;
    }

    .searchBar input {
      flex-grow: 1;
    }
    .searchBar button {
      flex-grow: 1;
    }
  }

  @media (max-width: 768px) {
    .cardsList {
      grid-template-columns: repeat(auto-fill, minmax(7rem, auto));
    }
  }
`;
