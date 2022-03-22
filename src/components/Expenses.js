import { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import ChartExpense from "./chart/ChartExpense";

const Expenses = (props) => {

        const [filteredYear, setFilteredYear] = useState('2022');
      
        const filterChangeHandler = selectedYear => {
          setFilteredYear(selectedYear);
        };

        const filteredResult = props.items.filter( expense => {
            return expense.date.getFullYear().toString() === filteredYear;
        });

        if(filteredResult.length === 0)
        {
            return(
                <div className="expenses">
                <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
                <ChartExpense expenses={filteredResult} />
                <h2 style={{textAlign:"center", color:"white"}}>
                    No Expenses Found !
                </h2>
                </div>
            );
        }

    return (
        <div className="expenses">
            <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>

            <ChartExpense expenses={filteredResult} />
            
            {filteredResult.map((expense) => (
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            ))}
            
        </div>
    );
}

export default Expenses;