import React from "react";

export default class Task3 extends React.Component {
    // Пусть в методе render есть переменная text с текстом '<p>текст</p>'. С ее помощью выведите следующее: <div><p>текст</p></div>
    render() {
        const text = <p>текст</p>
        return <div><h3>Task 3:</h3>{text}</div>;
    }
}