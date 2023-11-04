import { ReadButton, ReadingButton, ToReadButton } from "./styled";

export type StatusType = "read" | "reading" | "to-read";

interface ReadingStatusButtonProps {
  statusType: StatusType;
}

export function ReadingStatusButton({ statusType }: ReadingStatusButtonProps) {
  {
    switch (statusType) {
      case "read":
        return (
          <ReadButton>
            <span className="material-symbols-outlined">check_circle</span>{" "}
            <span>Já li</span>
          </ReadButton>
        );
      case "reading":
        return (
          <ReadingButton>
            <span className="material-symbols-outlined">check_circle</span>{" "}
            <span>Estou lendo</span>
          </ReadingButton>
        );

      case "to-read":
        return (
          <ToReadButton>
            <span className="material-symbols-outlined">check_circle</span>{" "}
            <span>Quero ler</span>
          </ToReadButton>
        );
    }
  }
}
