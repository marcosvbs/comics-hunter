import styled from "styled-components";

export const ControllerContainer = styled.div`
  min-width: 18.75rem;
  height: fit-content;

  padding: 1.5rem;

  border: 1px solid ${(props) => props.theme.black};
  border-radius: 8px;

  display: flex;
  flex-direction: column;

  gap: 1.5rem;

  ul {
    list-style: none;

    display: flex;
    flex-direction: column;

    gap: 1rem;
  }

  .material-symbols-outlined {
    font-size: 1.25rem;

    font-variation-settings:
      "FILL" 1,
      "wght" 400,
      "GRAD" 0,
      "opsz" 24;
  }
`;

const ChangeStatusButton = styled.button`
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

  cursor: pointer;
`;

export const ReadButton = styled(ChangeStatusButton)`
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

export const ReadingButton = styled(ChangeStatusButton)`
  &:hover {
    color: ${(props) => props.theme["orange-400"]};

    background: ${(props) => props.theme["orange-100"]};

    border: 1px solid ${(props) => props.theme["orange-400"]};
  }

  &.selected {
    color: ${(props) => props.theme.white};

    background: ${(props) => props.theme["orange-400"]};

    border: 1px solid transparent;
  }
`;

export const ToReadButton = styled(ChangeStatusButton)`
  &:hover {
    color: ${(props) => props.theme["pink-400"]};

    background: ${(props) => props.theme["pink-100"]};

    border: 1px solid ${(props) => props.theme["pink-400"]};
  }

  &.selected {
    color: ${(props) => props.theme.white};

    background: ${(props) => props.theme["pink-400"]};

    border: 1px solid transparent;
  }
`;
