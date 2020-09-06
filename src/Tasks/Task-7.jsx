import React from "react";

export default class Task7 extends React.Component {
    // Дан див с текстом. Установите этому диву зеленый цвет, границу и border-radius в 30px.
    render() {
        const css = {
            color: 'green',
            border: '1px solid black',
            borderRadius: '30px'
        }
        return <div><h3>Task 7:</h3><div style={css}>текст</div></div>;
    }
}