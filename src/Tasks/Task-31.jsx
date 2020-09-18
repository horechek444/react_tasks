import React from "react";

export default class Task31 extends React.Component {
    // Дан инпут и кнопка submit. В инпут вводится текст. Сделайте так, чтобы по нажатию на кнопку этот текст вывелся в какой-нибудь абзац.
    constructor() {
        super();
        this.state = {value: '', show: false};
    }

    handleChange(event) {
        this.setState({value: event.target.value})
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({show: true});
    }

    render() {
        let message;
        if (this.state.show) {
            message = <p>{this.state.value}</p>
        }
        return <form onSubmit={this.handleSubmit.bind(this)}>
            <h3>Task 31:</h3>
            {message}
            <input value={this.state.value} onChange={this.handleChange.bind(this)} />
            <input type="submit" />
        </form>
    }
}