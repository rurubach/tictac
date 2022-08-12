import './Table.css'
import Square from './Square.js';
import { useEffect, useState } from 'react'
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css';

function checkEnd(a) {
  if (a[0] === 1 && a[1] === 1 && a[2] === 1) return 'M'
  if (a[0] === 2 && a[1] === 2 && a[2] === 2) return 'B'
  if (a[3] === 1 && a[4] === 1 && a[5] === 1) return 'M'
  if (a[3] === 2 && a[4] === 2 && a[5] === 2) return 'B'
  if (a[6] === 1 && a[7] === 1 && a[8] === 1) return 'M'
  if (a[6] === 2 && a[7] === 2 && a[8] === 2) return 'B'
  if (a[0] === 1 && a[3] === 1 && a[6] === 1) return 'M'
  if (a[0] === 2 && a[3] === 2 && a[6] === 2) return 'B'
  if (a[1] === 1 && a[4] === 1 && a[7] === 1) return 'M'
  if (a[1] === 2 && a[4] === 2 && a[7] === 2) return 'B'
  if (a[2] === 1 && a[5] === 1 && a[8] === 1) return 'M'
  if (a[2] === 2 && a[5] === 2 && a[8] === 2) return 'B'
  if (a[0] === 1 && a[4] === 1 && a[8] === 1) return 'M'
  if (a[0] === 2 && a[4] === 2 && a[8] === 2) return 'B'
  if (a[2] === 1 && a[4] === 1 && a[6] === 1) return 'M'
  if (a[2] === 2 && a[4] === 2 && a[6] === 2) return 'B'
}

function Table() {
  const [mb, setMb] = useState('M')
  const [hako, setHako] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0])

  const go = i => {
    if (hako[i] === 0) {
      setHako(hako.map((e, id) => (id === i ? (mb === 'M' ? 1 : 2) : e)))
      setMb(mb === 'M' ? 'B' : 'M')
    }
  }

  const reset = () => {
    setHako([0, 0, 0, 0, 0, 0, 0, 0, 0])
    setMb('M')
  }

  useEffect(() => {
    const winner = checkEnd(hako)
    if (winner) {
      confirmAlert({
        message: `${winner === 'M' ? '⭕️' : '❌'} 贏了✌️`,
        buttons: [
          {
            label: '重來',
            onClick: reset
          }
        ],
        afterClose: reset
      })
    }
  }, [hako])

  return (
    <div>
      <div className='table'>
          <Square maru={hako[0] === 1} batsu={hako[0] === 2} onClick={() => go(0)} />
          <Square maru={hako[1] === 1} batsu={hako[1] === 2} onClick={() => go(1)} />
          <Square maru={hako[2] === 1} batsu={hako[2] === 2} onClick={() => go(2)} />
          <Square maru={hako[3] === 1} batsu={hako[3] === 2} onClick={() => go(3)} />
          <Square maru={hako[4] === 1} batsu={hako[4] === 2} onClick={() => go(4)} />
          <Square maru={hako[5] === 1} batsu={hako[5] === 2} onClick={() => go(5)} />
          <Square maru={hako[6] === 1} batsu={hako[6] === 2} onClick={() => go(6)} />
          <Square maru={hako[7] === 1} batsu={hako[7] === 2} onClick={() => go(7)} />
          <Square maru={hako[8] === 1} batsu={hako[8] === 2} onClick={() => go(8)} />
      </div>
      <button onClick={reset}>重來</button>
    </div>
  );
}

export default Table;
