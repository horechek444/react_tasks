import React from "react";

export default class Task15 extends React.Component {
    // Дан следующий стейт:
    //
    // this.state = {name: 'Иван', age: 25};
    // Изначально метод render выводит на экран следующее:
    //
    // <div>
    // 	имя: Иван, возраст: 25
    // </div>
    // Сделайте кнопочку, по нажатию на которую 'Иван' поменяется на 'Коля', а 25 поменяется на 30.

    constructor() {
        super();
        this.state = {name: 'Иван', age: 25};
    }

    changeName() {
        this.setState({name: 'Коля', age: 30})
    }

    render() {
        return (
            <div>
                <h3>Task 15:</h3>
                <p>
                имя: {this.state.name},
                возраст: {this.state.age}
                </p>
                <button onClick={this.changeName.bind(this)}>Нажми для смены имени</button>
            </div>

        );
    }
}