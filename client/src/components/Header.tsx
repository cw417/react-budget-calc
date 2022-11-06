import React from 'react'

type Props = {
  title: string;
}

export default function Header(props: Props) {
  return (
    <div className='white-text center f-3 m-2'>
      <div>{props.title}</div>
    </div>
  )
}