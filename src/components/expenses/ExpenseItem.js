import './ExpenseItem.css'
import Card from '../UI/Card'
function ExpenseItem(props){
  const month = props.date.toLocaleString('en-US', {month: 'long'})
  const day = props.date.toLocaleString('en-US', {day: '2-digit'})
    const year = props.date.getFullYear()
    return(
    
        <Card className='expense-item'>
      <div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
      </div>
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>{props.amount}</div>
      </div>
    </Card>
    )
}

export default ExpenseItem