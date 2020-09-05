import React from "react";

export default class Task2 extends React.Component {
    // Пусть в методе render есть переменная text с текстом 'текст'. С ее помощью выведите следующее:  <div> текст </div>
    render() {
        const text = 'текст';
        return <div>{text}</div>;
    }
}