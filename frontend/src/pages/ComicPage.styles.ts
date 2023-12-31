import styled from "styled-components";

export const StyledComicPage = styled.main`
  max-width: 80rem;

  padding: 2.5rem 1.5rem 6.25rem;

  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  .content {
    margin-bottom: auto;

    display: flex;
    flex-direction: row;

    justify-content: center;

    gap: 1.5rem;
  }

  .coverContainer {
    max-width: 18.75rem;

    flex-grow: 1;
  }

  .coverContainer img {
    width: 100%;
  }

  .infoContainer {
    display: flex;
    flex-direction: column;

    flex-grow: 1;

    gap: 2rem;
  }

  .infoContainer .infoLine {
    max-width: 37.5rem;

    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .infoContainer .infoLine p {
    max-width: 37.5rem;
  }

  @media (max-width: 576px) {
    padding: 2.5rem 1.5rem;

    .content {
      display: grid;
      grid-template-rows: repeat(2, 1fr);
    }
  }
`;
