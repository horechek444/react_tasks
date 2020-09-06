import React from "react";

export default class Task5 extends React.Component {
    // Пусть в методе render есть переменная attr с текстом 'block'. Сделайте так, чтобы метод render вывел на экран следующее (значение атрибута id должно вставится из переменной attr):
    //
    // <div id="block">
    // 	текст
    // </div>
    render() {
        const attr = 'block';
        return (<div><h3>Task 5:</h3><div id={attr}>текст</div></div>

        );
    }
}