import React, { useState } from 'react'
import './calculator.css'

function Calculator() {
    const [expression, setExpression] = useState("")
    const [result, setResult] = useState("")
    const [isDarkMode, setIsDarkMode] = useState(false)
    const handleInput = (value) => {
        setExpression(expression + value)
    }

    const clear = () => {
        setExpression("")
        setResult("")
    }

    const calculate = () => {
        try {
            setResult(eval(expression))
        } catch (error) {
            setResult("Invalid expression")
        }
    }

    const expressionSlice = () => {
        setExpression(expression.slice(0, -1))
    }

    // TEST
    console.log(isDarkMode);
    return (
        <div className='container-fluid d-flex justify-content-center align-items-center' style={{height:"100vh",backgroundColor:isDarkMode?"black":"white"}}>
            <div className="calculator rounded-5 p-3 container-fluid" style={{backgroundColor:isDarkMode?"#17181a":"#f7f8fb"}}>
                <div className='result-container text-end mb-4 container-fluid'>
                    <div className="history fs-4 text-secondary" style={{wordWrap:"break-word"}}>
                        {
                            expression?
                            expression :
                            "Expression"
                        }
                    </div>
                    <div className={isDarkMode?"result fs-1 fw-medium text-light":"result fs-1 fw-medium"}>
                        = {
                            result?
                            result :
                            "0"
                        }
                    </div>
                </div>
                <div className="container-fluid w-100">
                    <div className="row gap-2 mb-3">
                        <div className={isDarkMode?"btn col bg-secondary text-light d-flex justify-content-center align-items-center rounded-4 fw-semibold fs-4":"btn col bg-white d-flex justify-content-center align-items-center rounded-4 fw-semibold fs-4"} style={{height:"55px"}} onClick={clear}>C</div>
                        <div className={isDarkMode?"btn col bg-secondary text-light d-flex justify-content-center align-items-center rounded-4 fw-semibold fs-4":"btn col bg-white d-flex justify-content-center align-items-center rounded-4 fw-semibold fs-4"} style={{height:"55px"}} onClick={expressionSlice}><i class="fa-solid fa-delete-left"></i></div>
                        <div className="btn col text-light d-flex justify-content-center align-items-center rounded-4 fw-semibold fs-4" style={{height:"55px",backgroundColor:"#23a056"}} onClick={() => handleInput("/")}>/</div>
                        <div className="btn col text-light d-flex justify-content-center align-items-center rounded-4 fw-semibold fs-4" style={{height:"55px",backgroundColor:"#23a056"}} onClick={() => handleInput("*")}>*</div>
                    </div>
                    <div className="row gap-2 mb-3">
                        <div className={isDarkMode?"btn col bg-dark text-green d-flex justify-content-center align-items-center rounded-4 fw-semibold fs-4":"btn col bg-white d-flex justify-content-center align-items-center rounded-4 fw-semibold fs-4"} style={{height:"55px"}} onClick={() => handleInput("7")}>7</div>
                        <div className={isDarkMode?"btn col bg-dark text-green d-flex justify-content-center align-items-center rounded-4 fw-semibold fs-4":"btn col bg-white d-flex justify-content-center align-items-center rounded-4 fw-semibold fs-4"} style={{height:"55px"}} onClick={() => handleInput("8")}>8</div>
                        <div className={isDarkMode?"btn col bg-dark text-green d-flex justify-content-center align-items-center rounded-4 fw-semibold fs-4":"btn col bg-white d-flex justify-content-center align-items-center rounded-4 fw-semibold fs-4"} style={{height:"55px"}} onClick={() => handleInput("9")}>9</div>
                        <div className="btn col text-light d-flex justify-content-center align-items-center rounded-4 fw-semibold fs-4" style={{height:"55px",backgroundColor:"#23a056"}} onClick={() => handleInput("-")}>-</div>
                    </div>
                    <div className="row gap-2 mb-3">
                        <div className={isDarkMode?"btn col bg-dark text-green d-flex justify-content-center align-items-center rounded-4 fw-semibold fs-4":"btn col bg-white d-flex justify-content-center align-items-center rounded-4 fw-semibold fs-4"} style={{height:"55px"}} onClick={() => handleInput("4")}>4</div>
                        <div className={isDarkMode?"btn col bg-dark text-green d-flex justify-content-center align-items-center rounded-4 fw-semibold fs-4":"btn col bg-white d-flex justify-content-center align-items-center rounded-4 fw-semibold fs-4"} style={{height:"55px"}} onClick={() => handleInput("5")}>5</div>
                        <div className={isDarkMode?"btn col bg-dark text-green d-flex justify-content-center align-items-center rounded-4 fw-semibold fs-4":"btn col bg-white d-flex justify-content-center align-items-center rounded-4 fw-semibold fs-4"} style={{height:"55px"}} onClick={() => handleInput("6")}>6</div>
                        <div className="btn col text-light d-flex justify-content-center align-items-center rounded-4 fw-semibold fs-4" style={{height:"55px",backgroundColor:"#23a056"}} onClick={() => handleInput("+")}>+</div>
                    </div>
                    <div className="row gap-2 mb-3">
                        <div className={isDarkMode?"btn col bg-dark text-green d-flex justify-content-center align-items-center rounded-4 fw-semibold fs-4":"btn col bg-white d-flex justify-content-center align-items-center rounded-4 fw-semibold fs-4"} style={{height:"55px"}} onClick={() => handleInput("1")}>1</div>
                        <div className={isDarkMode?"btn col bg-dark text-green d-flex justify-content-center align-items-center rounded-4 fw-semibold fs-4":"btn col bg-white d-flex justify-content-center align-items-center rounded-4 fw-semibold fs-4"} style={{height:"55px"}} onClick={() => handleInput("2")}>2</div>
                        <div className={isDarkMode?"btn col bg-dark text-green d-flex justify-content-center align-items-center rounded-4 fw-semibold fs-4":"btn col bg-white d-flex justify-content-center align-items-center rounded-4 fw-semibold fs-4"} style={{height:"55px"}} onClick={() => handleInput("3")}>3</div>
                        <div className="btn col text-light d-flex justify-content-center align-items-center rounded-4 fw-semibold fs-4" style={{height:"55px",backgroundColor:"#23a056"}} onClick={calculate}>=</div>
                    </div>
                    <div className="row gap-2 mb-3">
                        <div className="btn col text-light d-flex justify-content-center align-items-center rounded-4 fw-semibold fs-4" style={{height:"55px",backgroundColor:"#23a056"}} onClick={() => setIsDarkMode(!isDarkMode)}>{isDarkMode?<i class="fa-solid fa-sun"></i>:<i class="fa-solid fa-moon"></i>}</div>
                        <div className={isDarkMode?"btn col bg-dark text-green d-flex justify-content-center align-items-center rounded-4 fw-semibold fs-4":"btn col bg-white d-flex justify-content-center align-items-center rounded-4 fw-semibold fs-4"} style={{height:"55px"}} onClick={() => handleInput("0")}>0</div>
                        <div className={isDarkMode?"btn col bg-dark text-green d-flex justify-content-center align-items-center rounded-4 fw-semibold fs-4":"btn col bg-white d-flex justify-content-center align-items-center rounded-4 fw-semibold fs-4"} style={{height:"55px"}} onClick={() => handleInput(".")}>.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Calculator