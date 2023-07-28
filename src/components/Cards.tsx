import { useRef, useState } from "react";
import Button from "./Button";
import UpdateContent from "./UpdateContent";
import { CardsType, Work } from "../type/TodoType";

const Cards = (props: CardsType) => {
  const [updateState, setUpdateState] = useState<boolean>(false);

  const updateBoxRef = useRef<HTMLDivElement>(null);

  const updateButtonHandler = () => {
    setUpdateState(!updateState);
  };

  const completeUpdateButtonHandler = (id: string) => {
    // 수정 title, content

    const findUpdateBoxTitle = (
      updateBoxRef.current?.querySelector(".update-title") as HTMLInputElement
    ).value;

    const findUpdateBoxContent = (
      updateBoxRef.current?.querySelector(
        ".update-content"
      ) as HTMLTextAreaElement
    ).value;

    const newSetting = (id: string) => {
      const working: Work[] = props.working;

      const newWorking = working.map((data) => {
        if (data.id === id) {
          return {
            ...data,
            work: findUpdateBoxTitle,
            content: findUpdateBoxContent,
          };
        }
        return data;
      });

      localStorage.setItem("todokey", JSON.stringify([...newWorking]));
      props.setwork(newWorking);
    };

    newSetting(id);

    updateButtonHandler();
  };

  return (
    <div key={props.item.id} className="todo-box">
      <div className="todo-text">
        <h2 className="work-title">{props.item.work}</h2>
        {props.item.content}
      </div>
      {updateState && (
        <div className="update-box" ref={updateBoxRef}>
          <UpdateContent item={props.item}></UpdateContent>
        </div>
      )}
      <div className="buttons">
        <Button role={"delete"} fnc={props.deletefnc} para={props.item}>
          삭제하기
        </Button>

        {updateState && (
          <>
            <Button
              role={"update-complete"}
              fnc={completeUpdateButtonHandler}
              para={props.item}
            >
              수정완료
            </Button>
          </>
        )}

        {!updateState && (
          <Button role={"update"} fnc={updateButtonHandler} para={props.item}>
            수정
          </Button>
        )}

        <Button role={"complete"} fnc={props.statefnc} para={props.item}>
          {props.children}
        </Button>
      </div>
    </div>
  );
};

export default Cards;
