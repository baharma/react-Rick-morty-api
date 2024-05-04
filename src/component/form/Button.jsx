const Button = ({ ...props }) => {
  return (
    <button className={`btn btn-${props.type} `}>
      {props.name}
      {props.children}
    </button>
  );
};

export default Button;
