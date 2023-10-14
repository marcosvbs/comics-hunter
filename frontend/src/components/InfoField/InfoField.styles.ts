import styled from "styled-components";

export const StyledInfoField = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.25rem;

  .label {
    max-width: 12.5rem;

    font-family: "Roboto", sans-serif;
    font-size: 0.875rem;
    font-weight: 500;
    text-transform: uppercase;

    flex-grow: 1;
  }

  .value {
    max-width: 12.5rem;

    font-family: "Roboto", sans-serif;
    font-size: 1rem;
    font-weight: 400;

    flex-grow: 1;
  }
`;
