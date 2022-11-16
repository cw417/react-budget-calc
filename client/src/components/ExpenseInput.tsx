import React, { useRef } from 'react'

type Props = {}

export default function ExpenseInput({}: Props) {


  const descriptionRef = useRef<HTMLInputElement | null>(null);
  const amountRef = useRef<HTMLInputElement | null>(null);
  
  function renderMonthOptions() {
    for (let i = 1; i < 13; i++) {
      return (
        <option value={i}>{i}</option>
      )
    }
  }

  return (
    <div>
      <input ref={descriptionRef} />
      <input ref={amountRef} />
      <select name={"month"}>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
        <option value={6}>6</option>
        <option value={7}>7</option>
        <option value={8}>8</option>
        <option value={9}>9</option>
        <option value={10}>10</option>
        <option value={11}>11</option>
        <option value={12}>12</option>
      </select>
      <select name={"day"}>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
        <option value={6}>6</option>
        <option value={7}>7</option>
        <option value={8}>8</option>
        <option value={9}>9</option>
        <option value={10}>10</option>
        <option value={11}>11</option>
        <option value={12}>12</option>
        <option value={13}>12</option>
        <option value={14}>12</option>
        <option value={15}>12</option>
        <option value={16}>12</option>
        <option value={17}>12</option>
        <option value={18}>12</option>
        <option value={19}>12</option>
        <option value={20}>12</option>
        <option value={21}>12</option>
        <option value={21}>1</option>
        <option value={22}>2</option>
        <option value={23}>3</option>
        <option value={24}>4</option>
        <option value={25}>5</option>
        <option value={26}>6</option>
        <option value={27}>7</option>
        <option value={28}>8</option>
        <option value={29}>9</option>
        <option value={30}>10</option>
        <option value={31}>11</option>
      </select>
    </div>
  )
}