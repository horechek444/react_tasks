import React from "react";

export default class Task8 extends React.Component {
    // Пусть в методе render есть переменная show, которая может иметь значение true или false. Сделайте так, чтобы, если эта переменная равна true, метод render вывел на экран следующее:
    //
    // <div>
    // 	текст 1
    // </div>
    render() {
        const show = true;
        if (show) {
            return <div>текст 1</div>;
        } else {
            return <div>текст 2</div>;
        }
    }
}