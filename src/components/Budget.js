import React, {useContext, useState} from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
    const {budget, dispatch} = useContext(AppContext);
    const[isEditing, setIsEditing] = useState(false);
    const[newBudget, setNewBudget] = useState(budget);
    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        dispatch({ type: "SET_BUDGET", payload: newBudget });
        setIsEditing(false);
    };

    const handleInputChange = (e) => {
        setNewBudget(e.target.value);
    };
    return (
        <div className="alert alert-secondary d-flex justify-content-between">
            {isEditing ? (
                <>
                <input type="number" value={newBudget} onChange={handleInputChange} />
                <button onClick={handleSaveClick} >Submit</button>
                </>
            ):(
                <>
                <span>Budget: ${budget}</span>
                <button onClick={handleEditClick}>Edit</button>
                </>
            )}
        </div>
    );
    
};
export default Budget;