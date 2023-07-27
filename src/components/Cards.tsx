import Button from './Button';
import UpdateContent from './UpdateContent';

const Cards = (props) => {
    return (
      <div key={props.item.id} className='todo-box'>
        <div className='todo-text'>
          <h2 className='work-title'>{props.item.work}</h2>
          {props.item.content}
        </div>
        <div className='update-box hidden'>
            <UpdateContent item={props.item}></UpdateContent>
        </div>
        <div className='buttons'>
          <Button role={'delete'} name={'삭제하기'} fnc={props.fnc1} para={props.item}></Button>
          <Button role={'update-complete hidden'} name={'수정완료'} fnc={props.fnc4} para={props.item}></Button>
          <Button role={'update'} name={'수정'} fnc={props.fnc3} para={props.item}></Button>
          <Button role={'complete'} name={props.children} fnc={props.fnc2} para={props.item}></Button>
        </div>
      </div>
    )
};

export default Cards;