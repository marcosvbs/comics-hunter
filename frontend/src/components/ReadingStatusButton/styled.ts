import styled from "styled-components";

const Container = styled.button`
  width: 100%;

  padding: 0.5rem 1rem;

  color: ${(props) => props.theme.black};
  background: ${(props) => props.theme.white};

  border: 1px solid ${(props) => props.theme.black};
  border-radius: 8px;

  display: flex;
  flex-direction: row;
  justify-content: center;

  gap: 0.5rem;

  .material-symbols-outlined {
    font-size: 1.25rem;

    font-variation-settings:
      "FILL" 1,
      "wght" 400,
      "GRAD" 0,
      "opsz" 24;
  }
`;

export const ReadButton = styled(Container)`
  &:hover {
    color: ${(props) => props.theme["green-400"]};

    background: ${(props) => props.theme["green-100"]};

    border: 1px solid ${(props) => props.theme["green-400"]};
  }

  &.selected {
    color: ${(props) => props.theme.white};

    background: ${(props) => props.theme["green-400"]};

    border: 1px solid transparent;
  }
`;

export const ReadingButton = styled(Container)`
  &:hover {
    color: ${(props) => props.theme["orange-400"]};

    background: ${(props) => props.theme["orange-100"]};

    border: 1px solid ${(props) => props.theme["orange-400"]};
  }

  &:active {
    color: ${(props) => props.theme.white};

    background: ${(props) => props.theme["orange-400"]};

    border: 1px solid transparent;
  }
`;

export const ToReadButton = styled(Container)`
  &:hover {
    color: ${(props) => props.theme["pink-400"]};

    background: ${(props) => props.theme["pink-100"]};

    border: 1px solid ${(props) => props.theme["pink-400"]};
  }

  &.active {
    color: ${(props) => props.theme.white};

    background: ${(props) => props.theme["pink-400"]};

    border: 1px solid transparent;
  }
`;
