import { Expense } from '../App';
import ExpenseItem from './ExpenseItem';

type Props = {
  expenses: Expense[];
  updateExpense: Function;
  deleteExpense: Function;
}

export default function ExpenseList({ expenses, updateExpense, deleteExpense }: Props) {

  function renderExpenseList() {
    return (
      expenses.map((expense, index) => {
        return (
          <ExpenseItem 
            key={expense.id}
            expense={expense}
            updateExpense={updateExpense}
            deleteExpense={deleteExpense}
          />
        )
      })
    )
  }

  return (
    <div className='container expense-list'>
      <div>{renderExpenseList()}</div>
    </div>
  )
}