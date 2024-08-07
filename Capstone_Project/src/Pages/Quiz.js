import React from "react";
import { useState } from "react";
import Quiz  from "../Components/quizLogic";

const SelectQuiz = () => {
    const [activeSelection, setActiveSelection] = useState(null);
    const selectChoice = (selectedChoice) => {
        setActiveSelection(selectedChoice);
    };
    
    return(
        <section className="selection-container">
            <h1>Test your Knowledge</h1>
            <section className="food-waste">
               {activeSelection === null ? (
                    <section className="food-card" onClick={() => selectChoice("food")}>
                    <h2>Food Waste</h2>
                    </section>
               ) : (
                activeSelection === "food" && <Quiz activeSelection={activeSelection} />
               )}
            </section>
                {/* conditionally render the form to overtake the page when the user selects a quiz
                include a button at the end of the form to return to the quiz page */}
            <section className="clothing-waste">
                {activeSelection === null ? (
                    <section className="clothing-card" onClick={() => selectChoice("clothing")}>
                    <h2>Clothing Waste</h2>
                </section>
                ) : (
                    activeSelection === "clothing" && <Quiz activeSelection={activeSelection} /> 
                )}
            </section>
        </section>
    )
}
export default SelectQuiz;