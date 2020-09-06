import React from "react";

export default class Task20 extends React.Component {
    // Пусть в стейте дан массив имен ['Коля', 'Вася', 'Петя']. Выведите каждый элемент этого массива в отдельной <li> в списке ul. Вот так:
    //
    // <ul>
    // 	<li>Коля</li>
    // 	<li>Вася</li>
    // 	<li>Петя</li>
    // </ul>
    constructor() {
        super();
        this.state = {arr: ['Коля', 'Вася', 'Петя']};
    }

    render() {
        const list = this.state.arr.map((item, index) => {
            return <li key={index}>{item}</li>
        })
        return (<div>
                    <h3>Task 20:</h3>
                    <ul>{list}</ul>
                </div>);
    }
}