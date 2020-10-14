import React from "react";

export default class Task30 extends React.Component {
    // Дан инпут и 3 абзаца. В инпут вводится ФИО пользователя через пробел.
    // Сделайте так, чтобы при наборе текста в первом абзаце появилась фамилия пользователя, во втором - имя, а в третьем - отчество.
    constructor() {
        super();
        this.state = {value: ''};
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        const array = this.state.value.split(' ').map((item, index) => {
            return <p key={index}>{item}</p>;
        })
        return <form>
            <h3>Task 30:</h3>
            <div>{array}</div>
            <input value={this.state.value} onChange={this.handleChange.bind(this)} placeholder={'Ф И О'} />
        </form>
    }
}