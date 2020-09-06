import React from "react";

export default class Task17 extends React.Component {
    // Дан следующий стейт:
    //
    // this.state = {name: 'Иван', age: 25};
    // Дана кнопка (результат работы метода render):
    //
    // <div>
    // 	<button>Нажми на меня</button>
    // </div>
    // Сделайте так, чтобы по нажатию на кнопку результат работы метода render изменился на следующее ('Иван' и 25 должны взяться из стейта):
    //
    // <div>
    // 	<p>имя: Иван, возраст: 25</p>
    // 	<button>Нажми на меня</button>
    // </div>
    constructor() {
        super();
        this.state = {name: 'Иван', age: 25, show: false};
    }

    showData() {
        this.setState({show: true});
    }

    render() {
        let message;
        if (this.state.show) {
            message = <p>имя: {this.state.name}, возраст: {this.state.age}</p>
        }

        return <div>
            <h3>Task 17:</h3>
            {message}
            <button onClick={this.showData.bind(this)}>Нажми на меня</button>
        </div>;
    }
}