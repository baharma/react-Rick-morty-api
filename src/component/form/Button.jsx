const Button = ({ ...props }) => {
  return (
    <button className={`btn btn-${props.type} `} onClick={props.onClick}>
      {props.name}
      {props.children}
    </button>
  );
};

export default Button;
