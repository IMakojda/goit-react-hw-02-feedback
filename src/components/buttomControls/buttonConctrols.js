import React from "react";
import s from "../Counter/Counter.module.css"

const ButtonControls = ({onIncrement,onDecrement}) => (
    <div className="Counter_controls">
        <button type="button" className={s.button} onClick={onDecrement}>-1</button>
        <button type="button" className={s.button} onClick={onIncrement}>+1</button>
    </div>
)

export default ButtonControls;