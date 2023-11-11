import React from "react"
import ExpenseItem from "./components/expenses/ExpenseItem"
function App(){
  const expenses =[
    { title:'Car Insurance',amount:5000 ,date:new Date(2023,2,28)},
    { title:'Car Insurance',amount:5000 ,date:new Date(2023,2,28)},
    { title:'Car Insurance',amount:5000 ,date:new Date(2023,2,28)},
    { title:'Car Insurance',amount:5000 ,date:new Date(2023,2,28)},
  ]
  return React.createElement(
    'div',
    {},
   React.createElement('div',{},"lrts get started"),
   React.createElement(expenses,{items:expenses})
  )
  // return (
  //   <div>
  //     <h2>let's get started</h2>
  //     <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItem>
  //     <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}></ExpenseItem>
  //     <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}></ExpenseItem>
  //   </div>
  // )
}

export default App