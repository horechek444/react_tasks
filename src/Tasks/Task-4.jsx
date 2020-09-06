import React from "react";

export default class Task4 extends React.Component {
    // Пусть в методе render есть переменная text1 с текстом '<p>текст1</p>' и переменная text2 с текстом '<p>текст2</p>'.
    // С их помощью выведите следующее: <div><p>текст1</p><p>!!!</p><p>текст2</p></div>
    render() {
        const text1 = <p>текст1</p>;
        const text2 = <p>текст2</p>;
        return (
            <div><h3>Task 4:</h3>
                <div>
                    {text1}
                    {<p>!!!</p>}
                    {text2}
                </div>
            </div>
        );
    }
}