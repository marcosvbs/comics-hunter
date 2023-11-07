import { StyledInfoField } from "./styles";

interface InfoFieldProps {
  label: string;
  value: string;
}

export function InfoField({ label, value }: InfoFieldProps) {
  return (
    <StyledInfoField>
      <span className="label">{label}</span>
      <span className="value">{value}</span>
    </StyledInfoField>
  );
}
