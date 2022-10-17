import React, { useRef } from 'react'

type Props = {
  updateFunction: Function;
  labelText?: string;
  buttonText: string | JSX.Element;
}

export default function Input({ updateFunction, labelText, buttonText }: Props) {
  
  const expenseInfoRef = useRef<HTMLInputElement | null>(null);
  const expenseAmountRef = useRef<HTMLInputElement | null>(null);


  function handleUpdateInfo() {
    /**
     * Calls the update function and passes in the infoRef as a string.
     * Clears the inputRef when finished.
     */
    const info: string | undefined = (expenseInfoRef.current?.value !== null) ? expenseInfoRef.current?.value : '' ;
    if (info === '') return;
    updateFunction(info);
    expenseInfoRef.current!.value = null!;
  }

  function handleKeyPress(event: React.KeyboardEvent<HTMLElement>) {
    /**
     * Watches for 'Enter' keypress.
     * @param event  Keypress event watching for 'Enter' key.
     */
    if (event.key === 'Enter') {
      handleUpdateInfo();
    }
  }

  return (
    <div>
      <label>{labelText}</label>
      <input ref={expenseInfoRef} onKeyUp={handleKeyPress} type='text' placeholder={'Description'} />
      <input ref={expenseAmountRef} onKeyUp={handleKeyPress} type='text' placeholder={'Amount'} />
      <button onClick={handleUpdateInfo}>{buttonText}</button>
    </div>
  )
}
