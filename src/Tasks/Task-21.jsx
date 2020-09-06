import React from "react";

export default class Task21 extends React.Component {
    // Пусть в стейте дан массив имен ['Коля', 'Вася', 'Петя']. Выведите каждый элемент этого массива в отдельной <li> в списке ul. Вот так:
    //
    // <ul>
    // 	<li>Коля</li>
    // 	<li>Вася</li>
    // 	<li>Петя</li>
    // </ul>

    // Переделайте предыдущую задачу так, чтобы в каждой li кроме элемента массива еще и стоял его порядковый номер в массиве. Вот так:
    //
    // <ul>
    // 	<li>Коля - 1</li>
    // 	<li>Вася - 2</li>
    // 	<li>Петя - 3</li>
    // </ul>

    constructor() {
        super();
        this.state = {arr: ['Коля', 'Вася', 'Петя']};
    }

    render() {
        const list = this.state.arr.map((item, index) => {
            return <li key={index}>{item} - {index+1}</li>
        })
        return (<div>
            <h3>Task 21:</h3>
            <ul>{list}</ul>
        </div>);
    }
}