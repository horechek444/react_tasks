import React from "react";

export default class Task12 extends React.Component {
    // Дан следующий стейт:
    //
    // this.state = {name: 'Иван', age: 25};
    // Сделайте так, чтобы метод render вывел на экран следующее ('Иван' и 25 должны взяться из стейта):
    //
    // <div>
    // 	имя: Иван, возраст: 25
    // </div>
    constructor() {
        super();
        this.state = {name: 'Иван', age: 25};
    }

    render() {
        return <div><h3>Task 12:</h3>имя: {this.state.name}, возраст: {this.state.age}</div>;
    }
}