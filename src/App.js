import React from "react"
import Expenses from "../components/expenses/Expenses"
import NewExpense from "./components/NewExpense/NewExpense"
function App(){
  const expenses =[
    { title:'Car Insurance',amount:5000 ,date:new Date(2023,2,28)},
    { title:'Car Insurance',amount:5000 ,date:new Date(2023,2,28)},
    { title:'Car Insurance',amount:5000 ,date:new Date(2023,2,28)},
    { title:'Car Insurance',amount:5000 ,date:new Date(2023,2,28)},
  ]
  const addExpensezhandler = expense =>{
    console.log('in app.js')
  }
 return (
  <div>
    <NewExpense onAddExpense={addExpensezhandler}/>
    <Expenses items={expenses}/>
  </div>
 )
}

export default App