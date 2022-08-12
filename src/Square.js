import './Square.css'
import { GrClose } from 'react-icons/gr';
import { BiCircle } from 'react-icons/bi';


function Square(props) {
  let icon

  if (props.maru === true) {
    icon = <BiCircle />
  }

  if (props.batsu === true) {
    icon = <GrClose/>
  }

  return (
    <div className='square' onClick={props.onClick}>
      {icon}
    </div>
  );
}

export default Square;
