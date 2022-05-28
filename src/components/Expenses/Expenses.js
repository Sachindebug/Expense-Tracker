import React , {useState} from 'react'
import ExpenseItem from './ExpenseItem.js';
import './Expenses.css'
import Card from '../UI/Card.js';
import ExpensesChart from './ExpensesChart.js';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter.js';
export default function Expenses(props) {
  const [filteredYear,setFilteredYear] = useState('2022');
  const expenses=props.expenses;
  const filterChangeHandler = (selectedYear) =>{
    setFilteredYear(selectedYear);
  }
  // console.log(expenses[0].date.getFullYear());
  const afterFilter = expenses.filter(expense=> expense.date.getFullYear().toString()===filteredYear);
  return (
    <div>
      
      <Card className='expenses'>
      <ExpensesFilter selected={filteredYear} onChangeFilter = {filterChangeHandler}/>
      <ExpensesChart expense={afterFilter}/>
      {afterFilter.length===0 && <h2 className='expenses-list__fallback'>No Expense Found</h2>}
      {
          afterFilter.map((expense)=>(
          <ExpenseItem
          key={expense.id}
          title= {expense.title}
          amount = {expense.amount}
          date={expense.date}/>

        ))
      }
      
      </Card>

    </div>
    
  )
}
