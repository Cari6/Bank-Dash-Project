import Switch from "react-switch";
import { Container } from "./styles";
import Typography from "../typography";

interface SwitchProps {
  onChange: (checked: boolean) => void;
  checked: boolean;
  text?: string;
}

const SwitchComponent = ({ onChange, checked, text }: SwitchProps) => {
  return (
    <Container>
      <Switch
        onChange={onChange}
        checked={checked}
        offColor="#DFEAF2"
        onColor="#16DBCC"
        uncheckedIcon={false}
        checkedIcon={false}
      />
      <Typography variant="description1">{text}</Typography>
    </Container>
  );
};

export default SwitchComponent;
