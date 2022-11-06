import React from 'react'

type Props = {
  balance: number,
  income: number
}

export default function InfoDisplay({ balance, income}: Props) {
  return (
    <div className='info-display container'>
      <div>
        <label>Balance:</label>
        <span>{` $${balance}`}</span>
      </div>
      <div className='info-display--income'>
        <label>Income:</label>
        <span>{` $${income}`}</span>
      </div>
    </div>
  )
}