const Button = ({role, name, fnc, para}) =>{
    return <button className={role} onClick={(event) => fnc(para.id,event)}>{name}</button>
};
 export default Button;