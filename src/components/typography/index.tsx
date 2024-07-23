import { styles, Variant } from "./styles";

interface TypographyProps extends React.HTMLAttributes<HTMLParagraphElement> {
  variant?: Variant;
  error?: boolean;
}

const Typography = ({
  variant = "description1",
  error,
  style,
  ...props
}: TypographyProps) => {
  const rootStyles = {
    ...styles[variant],
    ...style,
  };

  if (error) rootStyles.color = "#FF0000";
  return <p style={rootStyles} {...props} />;
};

export default Typography;
