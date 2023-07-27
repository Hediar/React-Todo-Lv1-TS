import { useState } from "react";
import Button from "./Button";
import UpdateContent from "./UpdateContent";

const Cards = (props: any) => {
  const [updateState, setUpdateState] = useState<boolean>(false);
  return (
    <div key={props.item.id} className="todo-box">
      <div className="todo-text">
        <h2 className="work-title">{props.item.work}</h2>
        {props.item.content}
      </div>
      {updateState && (
        <div className="update-box">
          <UpdateContent item={props.item}></UpdateContent>
        </div>
      )}
      <div className="buttons">
        <Button role={"delete"} fnc={props.fnc1} para={props.item}>
          삭제하기
        </Button>

        {updateState && (
          <>
            <Button role={"update-complete"} fnc={props.fnc4} para={props.item}>
              수정완료
            </Button>
          </>
        )}

        {!updateState && (
          <Button role={"update"} fnc={props.fnc3} para={props.item}>
            수정
          </Button>
        )}

        <Button role={"complete"} fnc={props.fnc2} para={props.item}>
          {props.children}
        </Button>
      </div>
    </div>
  );
};

export default Cards;
