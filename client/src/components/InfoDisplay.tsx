import React from 'react'

type Props = {
  balance: number
}

export default function InfoDisplay({ balance }: Props) {
  return (
    <div className='container'>
      <div>
        {balance}
      </div>
    </div>
  )
}