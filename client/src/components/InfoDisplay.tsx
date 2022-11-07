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
    if (editing) amountRef.current!.value = income.toString();
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
    <div className='info-display container'>
      <div>
        <label>Balance:</label>
        <span>{` $${balance}`}</span>
      </div>
      <div className='info-display--income'>
        <span
          style={{display: editing ? 'none' : 'inline'}}
          onClick={toggleEditing}
        >{`Income: $${income}`}</span>
        <input
          style={{display: editing ? 'inline' : 'none'}}
          className='expense-amount-input background-same'
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