import React ,{useState} from "react"
import Expenses from "../components/expenses/Expenses"
import NewExpense from "./components/NewExpense/NewExpense"
function App(){
  const DUMMY_EXPENSES=[
    { id :'e1',title:'Car Insurance',amount:5000 ,date:new Date(2023,2,28)},
    {id:'e2', title:'Car Insurance',amount:5000 ,date:new Date(2023,2,28)},
    { id: 'e3',title:'Car Insurance',amount:5000 ,date:new Date(2023,2,28)},
    { id: 'e4',title:'Car Insurance',amount:5000 ,date:new Date(2023,2,28)},
  ]

  const App=()=>{
    const [expenses,setExpenses] = useState(DUMMY_EXPENSES)
  
  const addExpensezhandler = expense =>{
    setExpenses(prevExpenses=>{
      return [expense,...prevExpenses]
    })
  }

//  return (
//   <div>
//     <NewExpense onAddExpense={addExpensezhandler}/>
//     <Expenses items={expenses}/>
//   </div>
//  )
}
}

export default App