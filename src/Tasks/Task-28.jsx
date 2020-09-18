import React from "react";

export default class Task28 extends React.Component {
    // Модифицируйте предыдущую задачу так, чтобы текст в абзац выводился в верхнем регистре.
    constructor() {
        super();
        this.state = {value: 'текст можно изменить'};
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        return <form>
            <h3>Task 28:</h3>
            <p>{this.state.value.toUpperCase()}</p>
            <input value={this.state.value} onChange={this.handleChange.bind(this)} />
        </form>
    }
}