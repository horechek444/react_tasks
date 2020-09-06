import React from "react";

export default class Task26 extends React.Component {
    // Переделайте предыдущую задачу так, чтобы рядом с каждым именем появилась кнопочка, по нажатию на которую li с этим именем будет удаляться.
    constructor() {
        super();
        this.state = {items: ['Коля', 'Вася', 'Петя', 'Иван', 'Дима']};
    }

    removeItem(index) {
        this.state.items.splice(index, 1);
        this.setState({items: this.state.items});
    }

    render() {
        const list = this.state.items.map((item, index) => {
            return <li key={index}>{item} <button onClick={this.removeItem.bind(this, index)}>Удалить</button></li>;
        })
        return <div>
            <h3>Task 26:</h3>
            <ul>
                {list}
            </ul>
        </div>;
    }
}