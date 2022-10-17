import React from 'react'

type Props = {
  title: string;
}

export default function Header({ title }: Props) {
  return (
    <div className='header'>
      <div>{title}</div>
    </div>
  )
}