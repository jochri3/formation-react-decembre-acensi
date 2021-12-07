interface ButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  label: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({
  label,
  children,
  onClick,
  type = "button",
}) => {
  return (
    <button type={type} onClick={onClick}>
      {children}&nbsp;
      {label}
    </button>
  );
};

export default Button;
