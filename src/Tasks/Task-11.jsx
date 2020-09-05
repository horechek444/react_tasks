import React from "react"

export default class Task11 extends React.Component {
    // Пусть класс App имеет метод getNum1(), который своим результатом возвращает число 1 и метод getNum2(), который своим результатом возвращает число 2.
    // Используя эти методы в методе render выведите на экран сумму результатов этих методов (3 - результат сложения getNum1() и getNum2()):
    //
    // <div>
    // 	текст 3
    // </div>

    getNum1() {
        return 1;
    }

    getNum2() {
        return 2;
    }

    render() {
        const sum = this.getNum1() + this.getNum2();
        return <div>текст {sum}</div>;
    }
}