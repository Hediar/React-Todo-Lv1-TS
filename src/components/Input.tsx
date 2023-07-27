const Input = ({labelName, value, Add}) => {
    return (
      <>
      <label>{labelName}</label>
            <input 
            type='text'
            value={value}
            onChange={(event) => Add(event)}
            className='add-input'
            ></input>
      </>
    )
};

export default Input;