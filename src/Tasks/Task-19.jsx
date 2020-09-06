import React from "react";

export default class Task19 extends React.Component {
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

    // Переделайте предыдущую задачу так, чтобы по первому нажатию на кнопку абзац с нашим текстом показывался, а по второму нажатию - скрывался.

    // Переделайте предыдущую задачу так, чтобы по заходу на страницу текст кнопки был 'показать', а после нажатия на нее - 'скрыть' (ну и так далее - по каждому нажатию текст должен чередоваться).
    constructor() {
        super();
        this.state = {name: 'Иван', age: 25, show: false};
    }

    toggleText() {
        this.setState({show: !this.state.show});
    }

    render() {
        let message;
        if (this.state.show) {
            message = <p>имя: {this.state.name}, возраст: {this.state.age}</p>;
        }

        return <div>
            <h3>Task 19:</h3>
            {message}
            <button onClick={this.toggleText.bind(this)}>{this.state.show ? 'Скрыть' : 'Показать'}</button>
        </div>;
    }
}