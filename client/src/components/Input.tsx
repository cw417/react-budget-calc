import React, { useRef } from 'react'

type Props = {
  updateFunction: Function;
  labelText?: string;
  buttonText: string | JSX.Element;
}

export default function Input({ updateFunction, labelText, buttonText }: Props) {
  
  const descriptionRef = useRef<HTMLInputElement | null>(null);
  const amountRef = useRef<HTMLInputElement | null>(null);


  function handleUpdateInfo() {
    /**
     * Calls the update function and passes in the infoRef as a string.
     * Clears the inputRef when finished.
     */
    const description: string | undefined = (descriptionRef.current?.value !== null) ? descriptionRef.current?.value : '' ;
    if (description === '') return;
    const amount: string | undefined = (amountRef.current?.value !== null) ? amountRef.current?.value : '' ;
    if (amount === '') return;
    updateFunction({ description: description, amount: parseFloat(amount!)});
    descriptionRef.current!.value = null!;
    amountRef.current!.value = null!;
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
      <input ref={descriptionRef} onKeyUp={handleKeyPress} type='text' placeholder={'Description'} />
      <input ref={amountRef} onKeyUp={handleKeyPress} type='text' placeholder={'Amount'} />
      <button onClick={handleUpdateInfo}>{buttonText}</button>
    </div>
  )
}
