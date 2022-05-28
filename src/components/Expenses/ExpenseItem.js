import React from 'react'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

export default function ExpenseItem(props) {
  
  const expenseTitle = props.title;
  const expenseAmount = props.amount;
  
  return (
       <Card className='expense-item'>
        <ExpenseDate date={props.date}/>
        <div className='expense-item__description'>
            <h2>{expenseTitle}</h2>
            <div className='expense-item__price'>{expenseAmount}</div>
        </div>
        
       </Card>
  );
}
 