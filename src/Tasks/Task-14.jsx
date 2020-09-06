import React from "react";

export default class Task14 extends React.Component {
    // Дан следующий стейт:
    //
    // this.state = {name: 'Иван', age: 25};
    // Сделайте кнопочку, по нажатию на которую сработает метод showName и на экран алертом выведется имя пользователя из стейта.
    constructor() {
        super();
        this.state = {name: 'Иван', age: 25};
    }

    showName() {
        alert(this.state.name);
    }

    render() {
        return <div><h3>Task 14:</h3><p><button onClick={this.showName.bind(this)}>Нажми для имени</button></p></div>;
    }
}