
const Child = ({children, user}) => {
 

  return (
    <div id="child">
      <h2>User: {user}</h2>
      {children}
    </div>
  );
};

export default Child;
