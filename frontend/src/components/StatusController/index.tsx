import {
  ControllerContainer,
  ReadButton,
  ReadingButton,
  ToReadButton,
} from "./styles";

export type Status = "" | "read" | "reading" | "to-read";

interface StatusControllerProps {
  currentStatus: Status;
  changeStatus: (newStatus: Status) => void;
}

export function StatusController({
  currentStatus,
  changeStatus,
}: StatusControllerProps) {
  function handleChangeStatus(newStatus: Status) {
    if (newStatus === currentStatus) {
      changeStatus("");
    } else {
      changeStatus(newStatus);
    }
  }

  function checkIfSelected(status: Status) {
    if (status === currentStatus) {
      return "selected";
    } else {
      return undefined;
    }
  }

  return (
    <ControllerContainer>
      <h2>Eai, já leu esse?</h2>

      <ul>
        <li>
          <ReadButton
            className={checkIfSelected("read")}
            onClick={() => handleChangeStatus("read")}
          >
            <span className="material-symbols-outlined">check_circle</span>
            <span>Já li</span>
          </ReadButton>
        </li>
        <li>
          <ReadingButton
            className={checkIfSelected("reading")}
            onClick={() => handleChangeStatus("reading")}
          >
            <span className="material-symbols-outlined">local_library</span>
            <span>Estou lendo</span>
          </ReadingButton>
        </li>
        <li>
          <ToReadButton
            className={checkIfSelected("to-read")}
            onClick={() => handleChangeStatus("to-read")}
          >
            <span className="material-symbols-outlined">bookmark</span>
            <span>Quero ler</span>
          </ToReadButton>
        </li>
      </ul>
    </ControllerContainer>
  );
}
