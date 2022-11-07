import { useState, useRef, useEffect, Dispatch, SetStateAction } from 'react'
import { FiCheck } from 'react-icons/fi';

type Props = {
  balance: number;
  income: number;
  updateIncome: Function;
}

export default function InfoDisplay({ balance, income, updateIncome }: Props) {

  const [editing, setEditing]: [boolean, Dispatch<SetStateAction<boolean>>]  = useState(false);
  const amountRef = useRef<HTMLInputElement | null>(null);

  function toggleEditing() {
    setEditing(prevEditing => !prevEditing);
  }

  function handleUpdateIncome() {
    if (editing) {
      const amount = amountRef.current!.value;
      updateIncome(amount);
      toggleEditing();
    }
  }

  useEffect(() => {
    if (editing) {
      amountRef.current!.focus();
      amountRef.current!.value = income.toString();
    }
    console.log(editing);
  }, [editing, income])

  function handleKeyPress(event: React.KeyboardEvent<HTMLElement>) {
    /**
     * Watches for 'Enter' keypress.
     * @param event  Keypress event watching for 'Enter' key.
     */
    if (event.key === 'Enter') {
      handleUpdateIncome();
    }
  }

  return (
    <div className='info-display container center'>
      <div>
        <label>Balance:</label>
        <div>{`$${balance}`}</div>
      </div>
      <div className='info-display--income'>
        <label>Income:</label>
        <div
          style={{display: editing ? 'none' : 'block'}}
          onClick={toggleEditing}
        >{`$${income}`}</div>
        <input
          style={{display: editing ? 'block' : 'none'}}
          className='info-display--income-input background-same'
          ref={amountRef}
          onKeyUp={handleKeyPress}
        />
        <button 
          onClick={handleUpdateIncome}
          className='button'
          style={{display: editing ? 'inline' : 'none'}}
        ><FiCheck /></button>
      </div>
    </div>
  )
}