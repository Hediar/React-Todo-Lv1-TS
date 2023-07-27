import {useState} from 'react';

const UpdateContent = ({item}) => {
    const [newTitle, setnewTitle] = useState(item.work);
    const [newContent, setnewContent] = useState(item.content);


    const newTitleHandler = (event) => {
        setnewTitle(event.target.value);
    };
    
    const newContentHandler = (event) => {
        setnewContent(event.target.value);
    };
    
    return(
        <>
        <input className='update-title'
          type='text'
          value={newTitle}
          onChange={(event) => newTitleHandler(event)}
          ></input>
          <textarea className='update-content'
          value={newContent}
          onChange={(event) => newContentHandler(event)}
          ></textarea>
        </>
    )
}

export default UpdateContent;