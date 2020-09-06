import React from "react";

export default class Task16 extends React.Component {
    // Дан следующий стейт:
    //
    // this.state = {show: true, name: 'Иван'};
    // Изначально результат работы метода render следующий ('Иван' берется из this.state.name):
    //
    // <div>
    // 	<p>Привет, Иван!</p>
    // </div>
    // Сделайте так, чтобы если this.state.show был равен true, то выводился текст 'Привет, Иван', а если равен false - то 'Пока, Иван'.

    constructor() {
        super();
        this.state = {show: true, name: 'Иван'};
    }

    render() {
        return <div>
            <h3>Task 16:</h3>
            <p>
            {this.state.show ? 'Привет, ' : 'Пока, '}{this.state.name}
        </p></div>;
    }
}