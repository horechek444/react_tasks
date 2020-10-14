import React from "react";

export default class Task33 extends React.Component {
    // Даны 3 инпута и кнопка. В инпуты вводится имя, фамилия и отчество. Сделайте так, чтобы по нажатию на кнопку под инпутами в какой-нибудь абзац вывелось полное ФИО пользователя.
    constructor() {
        super();
        this.state = {
            name: '',
            middleName: '',
            lastName: ''
        };
    }

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name]: value})
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({show: true});
    }

    render() {
        let message;
        if (this.state.show) {
            message = <p>{this.state.name + ' ' + this.state.middleName + ' ' + this.state.lastName}</p>
        }
        return <form onSubmit={this.handleSubmit.bind(this)}>
            <h3>Task 33:</h3>
            {message}
            <input name="name" type="text" value={this.state.name} onChange={this.handleChange.bind(this)} placeholder={'Имя'} />
            <input name="middleName" type="text" value={this.state.middleName} onChange={this.handleChange.bind(this)} placeholder={'Отчество'} />
            <input name="lastName" type="text" value={this.state.lastName} onChange={this.handleChange.bind(this)} placeholder={'Фамилия'} />
            <input type="submit" />
        </form>
    }
}