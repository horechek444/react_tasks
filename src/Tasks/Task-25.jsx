import React from "react";

export default class Task25 extends React.Component {
    // Переделайте предыдущую задачу так, чтобы появилась кнопочка, по нажатию на которую каждый раз будет исчезать
    // последняя li из списка (каждый раз по одной, пока li в списке не закончатся).
    constructor() {
        super();
        this.state = {items: ['Коля', 'Вася', 'Петя', 'Иван', 'Дима']};
    }

    removeItem() {
        this.state.items.splice(this.state.items.length-1, 1);
        this.setState({items: this.state.items});
    }

    render() {
        const list = this.state.items.map((item, index) => {
            return <li key={index}>{item}</li>;
        })
        return <div>
            <h3>Task 25:</h3>
            <ul>
                {list}
            </ul>
            <button onClick={this.removeItem.bind(this)}>Удалить последний пункт</button>
        </div>;
    }
}