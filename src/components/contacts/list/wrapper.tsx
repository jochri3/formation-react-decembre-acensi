const Wrapper: React.FC = ({ children }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>First name</th>
          <th>Last name</th>
          <th>Email</th>
          <th>Telephone</th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
};

export default Wrapper;
