interface ErrorProps {
  message: string;
}

const Error: React.FC<ErrorProps> = ({ message }) => {
  return <div style={{ color: "red" }}>{message}</div>;
};

export default Error;
