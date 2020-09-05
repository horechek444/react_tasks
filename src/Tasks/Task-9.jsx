import React from "react";

export default class Task9 extends React.Component {
    // Пусть в методе render есть переменная arr, в которой лежит массив с элементами ['a', 'b', 'c', 'd', 'e'].
    // Сделайте так, чтобы метод render вывел на экран следующее (в каждую лишку запишется один из элементов массива):
    //
    // <ul>
    // 	<li>a</li>
    // 	<li>b</li>
    // 	<li>c</li>
    // 	<li>d</li>
    // 	<li>e</li>
    // </ul>
    render() {
        const arr = ['a', 'b', 'c', 'd', 'e'];
        const list = arr.map(function (item, index){
            return <li key={index}>{item}</li>;
        })
        return <ul>{list}</ul>;
    }
}