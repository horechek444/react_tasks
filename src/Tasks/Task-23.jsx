import React from "react";

export default class Task23 extends React.Component {
    // Пусть в стейте дан массив имен ['Коля', 'Вася', 'Петя', 'Иван', 'Дима']. Выведите каждый элемент этого массива в отдельной <li> в списке ul.
    constructor() {
        super();
        this.state = {items: ['Коля', 'Вася', 'Петя', 'Иван', 'Дима']};
    }

    render() {
        const list = this.state.items.map((item, index) => {
            return <li key={index}>{item}</li>;
        })
        return <div>
            <h3>Task 23:</h3>
            <ul>
                {list}
            </ul>
        </div>;
    }
}