'use strict';

// task 1
function task1() {
    let negativeNumbers = 0;
    const numbers = [];

    const form = document.getElementById('task1');
    const number = form.querySelector('input');
    const submitBtn = form.querySelector('button[type="submit"]');
    const resetBtn = form.querySelector('button[type="reset"]');
    const result = form.querySelector('.result');
    const h2 = form.querySelector('h2');
    const pNumbers = document.createElement('p')
    const pNegative = document.createElement('p');
    pNumbers.textContent = '';


    function submit(event) {
        event.preventDefault();
        if (numbers.length < 6) {
            if (number.value < 0) {
                negativeNumbers++;
            }
            numbers.push(number.value);
        } else {
            alert('Array is full!');
        }
        h2.textContent = 'Array elements';
        pNumbers.textContent = `${ numbers }`;
        pNumbers.textContent = '[' + pNumbers.textContent + ']';
        pNegative.textContent = `Array contains ${ negativeNumbers } negative elements`;
        result.append(pNumbers, pNegative);
    }

    function reset() {
        number.value = null;
        pNegative.textContent = '';
        pNumbers.textContent = '';
        h2.textContent = '';
    }

    submitBtn.addEventListener('click', submit);
    resetBtn.addEventListener('click', reset);
}

// task 2
function task2() {
    const generateBtn = document.getElementById('createTable');
    const tableRoot = document.getElementById('table');

    function generate(event) {
        event.preventDefault();
        tableRoot.innerHTML = '';
        const table = [];
        const result = document.querySelector('.table .result');
        result.innerHTML = '';

        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max + 1 - min)) + min;
        }

        for (let i = 0; i < 4; i++) {
            const row = [];
            for (let j = 0; j < 7; j++) {
                row.push(getRandomInt(100, 280));
            }
            table.push(row);
        }

        table.forEach((row, index) => {
            const p = document.createElement('p');
            let countEven = 0;
            row.forEach(number => {
                if (number % 2 === 0) {
                    countEven++;
                }
            });
            p.textContent = `Row ${ index + 1 } contains ${ countEven } even numbers`;
            result.append(p);
        });


        function generateTable(tableHost, tableArray) {
            for (let i = 0; i < tableArray.length; i++) {
                const tableRow = document.createElement('tr');

                for (let j = 0; j < tableArray[i].length; j++) {
                    const tableDataCell = document.createElement('td');
                    const p = document.createElement('p');
                    p.textContent = tableArray[i][j];
                    tableDataCell.append(p);
                    tableRow.append(tableDataCell);
                }
                tableHost.append(tableRow);
            }
        }

        generateTable(tableRoot, table);
    }

    generateBtn.addEventListener('click', generate);
}

// task 3
function task3() {
    const form = document.getElementById('task3');
    const input = form.querySelector('input');

    function inputHandler(event) {
        event.target.value = event.target.value.replace(/[\d]/, "*") ;
    }

    input.addEventListener('input', inputHandler);
}

function init() {
    task1();
    task2();
    task3();
}

document.addEventListener('DOMContentLoaded', init);
