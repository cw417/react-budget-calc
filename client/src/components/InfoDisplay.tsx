import React from 'react'

type Props = {
  balance: number,
  income: number
}

export default function InfoDisplay(props: Props) {
  return (
    <div className='container'>
      <div>
        <label>Income:</label>
        <span>{props.income}</span>
      </div>
      <div>
        <label>Balance:</label>
        <span>{props.balance}</span>
      </div>
    </div>
  )
}