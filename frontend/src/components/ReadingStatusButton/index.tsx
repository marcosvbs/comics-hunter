import { ReadButton, ReadingButton, ToReadButton } from "./styled";

export type StatusType = "read" | "reading" | "to-read";

interface ReadingStatusButtonProps {
  statusType: StatusType;
  selected?: boolean;
}

export function ReadingStatusButton({
  statusType,
  selected,
}: ReadingStatusButtonProps) {
  {
    switch (statusType) {
      case "read":
        return (
          <ReadButton className={selected ? "selected" : undefined}>
            <span className="material-symbols-outlined">check_circle</span>
            <span>Já li</span>
          </ReadButton>
        );
      case "reading":
        return (
          <ReadingButton>
            <span className="material-symbols-outlined">local_library</span>
            <span>Estou lendo</span>
          </ReadingButton>
        );

      case "to-read":
        return (
          <ToReadButton>
            <span className="material-symbols-outlined">bookmark</span>
            <span>Quero ler</span>
          </ToReadButton>
        );
    }
  }
}
