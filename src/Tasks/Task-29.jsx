import React from "react";

export default class Task29 extends React.Component {
    //Дан инпут и абзац. В инпут вводится возраст пользователя. Сделайте так, чтобы при наборе текста в абзаце автоматически появлялся год рождения пользователя.
    constructor() {
        super();
        this.state = {value: ''};
    }

    handleChange(event){
        this.setState({value: event.target.value});
    }

    render() {
        return <form>
            <h3>Task 29:</h3>
            <p>{2020-this.state.value}</p>
            <input value={this.state.value} onChange={this.handleChange.bind(this)} placeholder={'Введите возраст'}/>
        </form>
    }
}