import { ButtonType } from "../TodoType";

const Button = (props: ButtonType) => {
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
