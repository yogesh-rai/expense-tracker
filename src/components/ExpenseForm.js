import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
    
    const [titleChanged, setTitleChanged] = useState('');
    const [dateChanged, setDateChanged] = useState('');
    const [amountChanged, setAmountChanged] = useState('');
    
    const titleChangeHandler = (event) =>{
        setTitleChanged(event.target.value);
    }

    const dateChangeHandler = (event) =>{
        setDateChanged(event.target.value);
    }

    const amountChangeHandler = (event) =>{
        setAmountChanged(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title : titleChanged,
            amount : amountChanged,
            date : new Date(dateChanged)
        };

        props.onSaveData(expenseData);
        setTitleChanged('');
        setDateChanged('');
        setAmountChanged('');
    }
    
    return(
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={titleChanged} onChange={titleChangeHandler}></input>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date"  min="2019-01-01"  max="2022-12-31"  value={dateChanged} onChange={dateChangeHandler}></input>
                </div>
                <div className="new-expense__control"> 
                    <label>Amount</label>
                    <input type="number" min="0.01"  step="0.001"  value={amountChanged} onChange={amountChangeHandler}></input>
                </div>

                <div className="new-expense__actions">
                    <button type="submit">Add Expense</button>
                </div>
            </div>
        </form>
    );
}

export default ExpenseForm;