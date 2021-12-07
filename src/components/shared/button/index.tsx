interface ButtonProps {
  label: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const Button: React.FC<ButtonProps> = ({ label, children, onClick }) => {
  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a onClick={onClick}>
      {children}&nbsp;
      {label}
    </a>
  );
};

export default Button;
