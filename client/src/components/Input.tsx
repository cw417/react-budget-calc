import React, { useRef } from 'react'

type Props = {
  numberOfInputs: 1 | 2;
  updateFunction: Function;
  labelText?: string;
  buttonText: string | JSX.Element;
  placeholder1: string;
  placeholder2?: string;
}

export default function BudgetInput( props : Props ) {
  
  const input1Ref = useRef<HTMLInputElement | null>(null);
  const input2Ref = useRef<HTMLInputElement | null>(null);


  function handleUpdateInfo() {
    /**
     * Calls the update function and passes in the infoRef as a string.
     * Clears the inputRef when finished.
     */
    const input1: string | undefined = (input1Ref.current?.value !== null) ? input1Ref.current?.value : '' ;
    if (input1 === '') return;
    if (props.numberOfInputs === 1) {
      props.updateFunction(input1);
    }
    else {
      const input2: string | undefined = (input2Ref.current?.value !== null) ? input2Ref.current?.value : '' ;
      if (input2 === '') return;
      props.updateFunction(input1, input2);
    }
    input1Ref.current!.value = null!;
    input2Ref.current!.value = null!;
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
    <div className='m-2'>
      <label>{props.labelText}</label>
      <input 
        className='input'
        ref={input1Ref}
        type='text'
        placeholder={props.placeholder1}
        onKeyUp={handleKeyPress}
      />
      <input
        className='input'
        ref={input2Ref}
        type='text'
        placeholder={props.placeholder2}
        onKeyUp={handleKeyPress}
        style={{display: props.numberOfInputs === 1 ? 'none' : 'inline' }}
      />
      <button
        className='button'
        onClick={handleUpdateInfo}
      >{props.buttonText}</button>
    </div>
  )
}
