import React from "react";

export default class Task27 extends React.Component {
    //  Дан инпут и абзац. Сделайте так, чтобы при наборе текста в инпуте он автоматически появлялся в этом абзаце.
    constructor() {
        super();
        this.state = {value: 'текст можно изменить'};
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        return <form>
            <h3>Task 27:</h3>
            <p>{this.state.value}</p>
            <input value={this.state.value} onChange={this.handleChange.bind(this)} />
        </form>
    }
}