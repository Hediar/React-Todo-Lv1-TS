import "./App.css";
import { useEffect, useState } from "react";

import Cards from "./components/Cards";
import Input from "./components/Input";
import { Work } from "./TodoType";

function App() {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const [working, setworking] = useState<any[]>([]);

  useEffect(() => {
    const data = localStorage.getItem("todokey");
    if (data) {
      setworking(JSON.parse(data));
    }
  }, []);

  const titleAddHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const contentAddHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value);
  };

  const clickAddButtonHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newWorking: Work = {
      id: working.length + 1,
      work: title,
      content: content,
      isDone: false,
    };
    const updateWorking = [...working, newWorking];
    setworking(updateWorking);
    localStorage.setItem("todokey", JSON.stringify(updateWorking));
    setTitle("");
    setContent("");
  };

  const clickDeleteButtonHandler = (id: number) => {
    const updateWokrings = working.filter((work) => work.id !== id);
    setworking(updateWokrings);
    localStorage.setItem("todokey", JSON.stringify([...updateWokrings]));
  };

  const clickCompleteButtonHandler = (id: number) => {
    const updateWokrings = working.map((work) => {
      if (work.id === id) {
        return { ...work, isDone: true };
      }
      return work;
    });
    setworking(updateWokrings);
    localStorage.setItem("todokey", JSON.stringify([...updateWokrings]));
  };

  const clickCancelButtonHandler = (id: number) => {
    const updateWokrings = working.map((work) => {
      if (work.id === id) {
        return { ...work, isDone: false };
      }
      return work;
    });

    setworking(updateWokrings);
    localStorage.setItem("todokey", JSON.stringify([...updateWokrings]));
  };

  // const updateButtonHandler = (id: number, event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  //   const HIDDEN_CLASSNAME = "hidden";
  //   // 클릭한 것의 todo-box 가져오기
  //   const updateBox = event.target.closest(".todo-box");
  //   const currentContent = updateBox.querySelector(".todo-text"); // 기존 보이는 제목과 내용
  //   const newContent = updateBox.querySelector(".update-box"); // 수정하는 칸
  //   const currentButtons = updateBox.querySelector(".buttons"); // 버튼 담긴 태그

  //   currentContent.classList.add(HIDDEN_CLASSNAME);
  //   currentButtons.querySelector(".update").classList.add(HIDDEN_CLASSNAME);
  //   newContent.classList.remove(HIDDEN_CLASSNAME);
  //   currentButtons
  //     .querySelector(".update-complete")
  //     .classList.remove(HIDDEN_CLASSNAME);
  // };

  // const completeUpdateButton = (id: number, event) => {
  //   const HIDDEN_CLASSNAME = "hidden";

  //   const updateBox = event.target.closest(".todo-box");
  //   const currentContent = updateBox.querySelector(".todo-text"); // 기존 보이는 제목과 내용
  //   const newContent = updateBox.querySelector(".update-box"); // 수정하는 칸
  //   const currentButtons = updateBox.querySelector(".buttons"); // 버튼 담긴 태그

  //   currentContent.classList.remove(HIDDEN_CLASSNAME);
  //   currentButtons.querySelector(".update").classList.remove(HIDDEN_CLASSNAME);
  //   newContent.classList.add(HIDDEN_CLASSNAME);
  //   currentButtons
  //     .querySelector(".update-complete")
  //     .classList.add(HIDDEN_CLASSNAME);

  //   const newTitleValue = newContent.querySelector(".update-title").value;
  //   const newContentValue = newContent.querySelector(".update-content").value;

  //   const newSetting = (id: number) => {
  //     const newWorking = working.map((data) => {
  //       if (data.id === id) {
  //         return { ...data, work: newTitleValue, content: newContentValue };
  //       }
  //       return data;
  //     });

  //     localStorage.setItem("todokey", JSON.stringify([...newWorking]));
  //     setworking(newWorking);
  //   };

  //   newSetting(id);
  // };

  return (
    <div className="mytodo">
      <div className="title">
        <div>My Todo List</div>
        <div>React</div>
      </div>
      <div className="input-form">
        <form className="addform" onSubmit={clickAddButtonHandler}>
          <Input labelName={"제목"} value={title} Add={titleAddHandler}></Input>
          <Input
            labelName={"내용"}
            value={content}
            Add={contentAddHandler}
          ></Input>
          <button className="add-btn">추가하기</button>
        </form>
      </div>
      <div className="list">
        <h1>Working..</h1>
        <div>
          <div className="working">
            {working
              .filter((work) => {
                return work.isDone === false;
              })
              .map((item) => {
                return (
                  <Cards
                    key={item.id}
                    item={item}
                    deletefnc={clickDeleteButtonHandler}
                    statefnc={clickCompleteButtonHandler}
                    working={working}
                    setwork={setworking}
                  >
                    완료
                  </Cards>
                );
              })}
          </div>
        </div>
        <h1>Done..!</h1>
        <div>
          <div className="done">
            {working
              .filter((work) => {
                return work.isDone === true;
              })
              .map((item) => {
                return (
                  <Cards
                    key={item.id}
                    item={item}
                    deletefnc={clickDeleteButtonHandler}
                    statefnc={clickCancelButtonHandler}
                    working={working}
                    setwork={setworking}
                  >
                    취소
                  </Cards>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
