import React from 'react'

type Props = {
  title: string;
}

export default function Header({ title }: Props) {
  return (
    <div className='white-text center f-3 m-2'>
      <div>{title}</div>
    </div>
  )
}