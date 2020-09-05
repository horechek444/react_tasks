import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Task1 from './Tasks/Task-1';
import Task2 from './Tasks/Task-2';
import Task3 from './Tasks/Task-3';
import Task4 from './Tasks/Task-4';
import Task5 from './Tasks/Task-5';
import Task6 from './Tasks/Task-6';
import Task7 from './Tasks/Task-7';
import Task8 from './Tasks/Task-8';
import Task9 from './Tasks/Task-9';
import Task10 from './Tasks/Task-10';
import Task11 from './Tasks/Task-11';
import Task12 from './Tasks/Task-12';
import Task13 from './Tasks/Task-13';
import Task14 from './Tasks/Task-14';
import Task15 from './Tasks/Task-15';
import * as serviceWorker from './serviceWorker';

// Задачи на рендеринг 1 - 4;
// Задачи на атрибуты 5 - 6;
// Задача на работу с CSS 7;
// Задача на условия 8;
// Задача на циклы 9;
// Задачи на методы 10 - 11;
// Задача на стейт 12;
// Задачи на события 13 - 14;
// Задача на setState 15;

ReactDOM.render(
  <React.StrictMode>
      <Task1 />
      <Task2 />
      <Task3 />
      <Task4 />
      <Task5 />
      <Task6 />
      <Task7 />
      <Task8 />
      <Task9 />
      <Task10 />
      <Task11 />
      <Task12 />
      <Task13 />
      <Task14 />
      <Task15 />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
