import React from "react";

export default class Task13 extends React.Component {
    // Сделайте кнопочку, по нажатию на которую сработает метод showMessage и на экран алертом выведется сообщение с текстом 'hello'.

    showMessage() {
        alert('hello');
    }

    render() {
        return <div><h3>Task 13:</h3><p><button onClick={this.showMessage}>Нажми для приветствия</button></p></div>;
    }
}