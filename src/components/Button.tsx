const Button = (props: any) => {
  return (
    <button
      className={props.role}
      onClick={(event) => props.fnc(props.para.id, event)}
    >
      {props.children}
    </button>
  );
};
export default Button;
