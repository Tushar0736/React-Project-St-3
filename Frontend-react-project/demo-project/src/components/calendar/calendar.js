import React, { useState } from "react"
import Calendar from "react-calendar"
const calendar = () => {
    const [value, onChange] = useState(new Date());

    let style = {
        border : "2px solid red",
        background_color : "red"
    }

    return(
        <>
        <h1>Hello</h1>
        <div className={style}>
            <Calendar onChange = {onChange} value={value} />
            {value.toString()}
        </div>
        </>
    );
};

export default calendar