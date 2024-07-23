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
          
           box-shadow: 0 0 5px rgba(74, 144, 226, 0.5);
          }
            
          
        `}
      </style>
      <input
        type="text"
        placeholder={placeholder}
        style={styles().input}
        className="input-with-placeholder"
        {...props}
      />
      <div style={styles().icon}>
        <img src={icon} alt={icon} style={styles().img} />
      </div>
    </div>
  );
};

export default Input;
