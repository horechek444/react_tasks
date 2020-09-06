import React from "react";

export default class Task22 extends React.Component {
    // Дан следующий стейт:
    //
    // this.state = {
    // 	hrefs: [
    // 		{href: '1.html', text: 'ссылка 1'},
    // 		{href: '2.html', text: 'ссылка 2'},
    // 		{href: '3.html', text: 'ссылка 3'},
    // 	]
    // };
    // С помощью this.state.hrefs выведите на экран следующее:
    //
    // <ul>
    // 	<li><a href="1.html">ссылка 1</a></li>
    // 	<li><a href="2.html">ссылка 2</a></li>
    // 	<li><a href="3.html">ссылка 3</a></li>
    // </ul>
    constructor() {
        super();
        this.state = {
            	hrefs: [
            		{href: '1.html', text: 'ссылка 1'},
            		{href: '2.html', text: 'ссылка 2'},
            		{href: '3.html', text: 'ссылка 3'},
            	]
            };
    }

    render() {
        const list = this.state.hrefs.map((item, index) => {
            return <li key={index}><a href={item.href}>{item.text}</a></li>
        })
        return <div>
            <h3>Task 22:</h3>
            <ul>{list}</ul>
        </div>;
    }
}