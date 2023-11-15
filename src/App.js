import React from "react"
import Expenses from "../components/expenses/Expenses"
function App(){
  const expenses =[
    { title:'Car Insurance',amount:5000 ,date:new Date(2023,2,28)},
    { title:'Car Insurance',amount:5000 ,date:new Date(2023,2,28)},
    { title:'Car Insurance',amount:5000 ,date:new Date(2023,2,28)},
    { title:'Car Insurance',amount:5000 ,date:new Date(2023,2,28)},
  ]
  
 return (
  <div>
    <h2>lets get started</h2>
    <Expenses items={expenses}/>
  </div>
 )
}

export default App