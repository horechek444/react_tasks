import React from "react";

export default class Task35 extends React.Component {
    // Дан массив с именами пользователей. Выведите этот массив в виде списка ul. Также даны инпут и кнопка.
    // Сделайте так, чтобы в инпут можно было ввести еще одно имя, нажать на кнопку - и это имя добавилось в конец списка ul.
    // Модифицируйте предыдущую задачу так, чтобы в конце каждой li появилась кнопка для удаления этого пункта списка.
    constructor() {
        super();
        this.state = {
            items: ['Коля', 'Вася', 'Петя', 'Иван', 'Дима'],
            value: ''}
    }

    removeItem(index) {
        this.state.items.splice(index, 1);
        this.setState({items: this.state.items});
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.state.items.push(this.state.value);
        this.setState({value: ''});
    }

    render() {
        const list = this.state.items.map((item, index) => {
            return <li key={index}>{item} <button onClick={this.removeItem.bind(this, index)}>Удалить</button></li>;
        })
        return <form onSubmit={this.handleSubmit.bind(this)}>
            <h3>Task 35:</h3>
            <ul>
                {list}
            </ul>
            <input name="name" type="text" value={this.state.value} onChange={this.handleChange.bind(this)} placeholder={'Добавить имя'} />
            <input type="submit" />
        </form>
    }
}