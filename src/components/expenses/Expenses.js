import ExpenseItem from './ExpenseItem'
import Card from './Card'
import './Expenses.css'
import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList'
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
            <ExpensesList items={filteredExpenses}/>
   </Card>
    )
}