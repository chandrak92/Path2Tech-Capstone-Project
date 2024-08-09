import React from "react";
import { useState } from "react";
import Quiz  from "../Components/quizLogic";
import "../Style/quizcard.css"

const SelectQuiz = () => {
    const [activeSelection, setActiveSelection] = useState(null);
    const selectChoice = (selectedChoice) => {
        setActiveSelection(selectedChoice);
    };
    const onClickReturn = (e) => {
        e.preventDefault();
        setActiveSelection(null);
      };
    
    return(
        <section className="selection-container">
            <h1>Test Your Knowledge</h1>
            <section className="quizpage-container">
                <section className="food-waste">
                {activeSelection === null ? (
                        <section className="food-card" onClick={() => selectChoice("food")}>
                        <h2>Food < br/> Waste</h2>
                        </section>
                ) : (
                    activeSelection === "food" && <Quiz activeSelection={activeSelection} onClickReturn={onClickReturn} />
                )}
                </section>
                    {/* conditionally render the form to overtake the page when the user selects a quiz
                    include a button at the end of the form to return to the quiz page */}
                <section className="clothing-waste">
                    {activeSelection === null ? (
                        <section className="clothing-card" onClick={() => selectChoice("clothing")}>
                        <h2>Textile < br/> Waste</h2>
                    </section>
                    ) : (
                        activeSelection === "clothing" && <Quiz activeSelection={activeSelection} /> 
                    )}
                </section>
            </section>
        </section>
    )
}
export default SelectQuiz;