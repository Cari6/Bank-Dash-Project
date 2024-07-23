import Image from "next/image";
import { styles } from "./styles";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  icon?: string;
}

const Input = ({ placeholder, icon, ...props }: InputProps) => {
  return (
    <div style={styles().inputContainer}>
      <style>
        {`
          .input-with-placeholder::placeholder {
            color:#8BA3CB;
          
          }
          .input-with-placeholder:hover {
          border-color: #cb8b90;
        
          }
        `}
      </style>
      {icon && <Image src={icon} alt={icon} width={18} height={18} />}
      <input
        type="text"
        placeholder={placeholder}
        style={styles().input}
        className="input-with-placeholder"
        {...props}
      />
    </div>
  );
};

export default Input;
