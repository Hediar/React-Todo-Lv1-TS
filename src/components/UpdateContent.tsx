import { useState } from "react";
import { UpdateTextType } from "../TodoType";

const UpdateContent = (props: UpdateTextType) => {
  const [newTitle, setnewTitle] = useState<string>(props.item.work);
  const [newContent, setnewContent] = useState<string>(props.item.content);

  const newTitleHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setnewTitle(event.target.value);
  };

  const newContentHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setnewContent(event.target.value);
  };

  return (
    <>
      <input
        className="update-title"
        type="text"
        value={newTitle}
        onChange={(event) => newTitleHandler(event)}
      ></input>
      <textarea
        className="update-content"
        value={newContent}
        onChange={(event) => newContentHandler(event)}
      ></textarea>
    </>
  );
};

export default UpdateContent;
