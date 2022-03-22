import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const newExpense = (props) =>{

    const newExpenseData = (data) => {
       const newData = {
            ...data,
            id: Math.random().toString()
       };
       props.onSaveDataHandler(newData);
    }

    return(
        <div className="new-expense">
            <ExpenseForm onSaveData={newExpenseData}/>
        </div>
    );
}

export default newExpense;