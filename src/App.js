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
  
 return (
  <div>
    <NewExpense/>
    <Expenses items={expenses}/>
  </div>
 )
}

export default App