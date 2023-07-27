const Input = (props: any) => {
  return (
    <>
      <label>{props.labelName}</label>
      <input
        type="text"
        value={props.value}
        onChange={(event) => props.Add(event)}
        className="add-input"
      ></input>
    </>
  );
};

export default Input;
