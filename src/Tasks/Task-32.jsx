import React from "react";

export default class Task32 extends React.Component {
    // Даны два инпута и кнопка. В инпуты вводятся числа. Сделайте так, чтобы по нажатию на кнопку под инпутами в какой-нибудь абзац вывелась сумма этих чисел.
    constructor() {
        super();
        this.state = {
            first: '',
            second: ''
        };
    }

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        console.log(name, value);
        this.setState({[name]: value})
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({show: true});
    }

    render() {
        let message;
        if (this.state.show) {
            message = <p>{Number(this.state.first) + Number(this.state.second)}</p>
        }
        return <form onSubmit={this.handleSubmit.bind(this)}>
            <h3>Task 32:</h3>
            {message}
            <input name="first" type="number" value={this.state.first} onChange={this.handleChange.bind(this)} placeholder={'Первое слагаемое'} />
            <input name="second" type="number" value={this.state.second} onChange={this.handleChange.bind(this)} placeholder={'Второе слагаемое'} />
            <input type="submit" />
        </form>
    }
}