import React from "react";
import "./ExpenseItem.css";
import "./ExpenseDate.css";

const ExpenseItem = (props) => {

   const day = props.date.toLocaleString('en-us', {day : '2-digit'});
   const year = props.date.getFullYear();
   const month = props.date.toLocaleString('en-us', {month : 'long'});

   return (
       <div className="expense-item">
           <div className="expense-date">
                <div className="expense-date__month">{month}</div>
                <div className="expense-date__day ">{day}</div>
                <div className="expense-date__year">{year}</div>
           </div>
           
           <div className="expense-item__description">
               <h2>{props.title}</h2>
               <div className="expense-item__price">${props.amount}</div>
           </div>
       </div>
   ) ;
}

export default ExpenseItem;