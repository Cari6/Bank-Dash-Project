import Switch from "react-switch";

interface SwitchProps {
  onChange: (checked: boolean) => void;
  checked: boolean;
}

const SwitchComponent = ({ onChange, checked }: SwitchProps) => {
  return (
    <Switch
      onChange={onChange}
      checked={checked}
      offColor="#DFEAF2"
      onColor="#16DBCC"
      uncheckedIcon={false}
      checkedIcon={false}
    />
  );
};

export default SwitchComponent;
