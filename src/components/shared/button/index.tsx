interface ButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  type = "button",
}) => {
  return (
    <button type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
