import ExpenseItem from './ExpenseItem'
import Card from './Card'
import './Expenses.css'
import ExpensesFilter from './ExpensesFilter'
function Expenses(props){
    const [filteredYear,setFilteredYear] = useState('2020')
    const filterChangeHandler = selectedYear=>{
        setFilteredYear(selectedYear)
    }

    const filteredExpenses = props.items.filter(
        (expense) => expense.date.getFullYear().toString() === filteredYear
      );

    return(
        <Card className='expenses'>
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
            {filteredExpenses.map(expense=>
            <ExpenseItem 
            key={expense.id}
            title={expense.title} 
            amount={expense.amount} 
            date={expense.date}/>)}
             
    <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItem>
     <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}></ExpenseItem>
     <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}></ExpenseItem>
   </Card>
    )
}