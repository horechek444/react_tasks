import React from "react";

export default class Task6 extends React.Component {
    // Пусть в методе render есть переменная str с текстом 'block'. Сделайте так, чтобы метод render вывел на экран следующее (значение атрибута class должно вставится из переменной str):
    //
    // <div class="block">
    // 	текст
    // </div>
    render() {
        const str = 'block';
        return <div><h3>Task 6:</h3><div className={str}>текст</div></div>;
    }
}