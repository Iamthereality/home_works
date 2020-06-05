'use strict';

function clear(inputs) {
    inputs.forEach(input => input.value = null);
}

// task 9
const task9 = () => {
    const form = document.getElementById('task9');
    const inputs = form.querySelectorAll('input');
    const clearBtn = form.querySelector('button[type="reset"]');
    const submitBtn = form.querySelector('button[type="submit"]');
    const resultContainer = form.querySelector('.result-container');

    const submit = (event) => {
        event.preventDefault();
        resultContainer.innerHTML = null;
        let total = 0;
        inputs.forEach((input, index) => {
           if (input.value > 0) {
               const paragraphElement = document.createElement('p');
               const str = parseInt(input.value).toString();
               let res = 0;
               for (let i = 0; i < str.length; i++) {
                   res += parseInt(str[i]);
                   paragraphElement.textContent = `${ index + 1 } number's digits sum is ${ res }`;
                   resultContainer.append(paragraphElement);
               }
               total += res;
           }
        });
        const paragraphElement = document.createElement('p');
        paragraphElement.textContent = total ? `Total sum is ${ total }` : 'no values entered';
        resultContainer.append(paragraphElement);
        clear(inputs);
    };

    clearBtn.addEventListener('click', clear.bind(this, inputs));
    submitBtn.addEventListener('click', submit);
};

// task 18
const task18 = () => {
    const form = document.getElementById('task18');
    const input = form.querySelector('input');
    const clearBtn = form.querySelector('button[type="reset"]');
    const submitBtn = form.querySelector('button[type="submit"]');
    const resultContainer = form.querySelector('.result-container');

    const submit = (event) => {
        event.preventDefault();
        resultContainer.innerHTML = null;
        const target = parseInt(input.value);

        const factorial = (n) => {
            let res = 1;
            for (let i = 2; i <= n; ++i) {
                res *= i;
            }
            return res;
        };

        const result = (a, b) => a / b;
        let res = 0.0;
        let factorialCounter = 3;

        for (let i = 1; i < target + 1; i++) {
            res += result(i, factorial(factorialCounter));
            factorialCounter++;
        }

        const paragraphElement = document.createElement('p');
        paragraphElement.textContent = target ? res : 'no values entered';
        resultContainer.append(paragraphElement);
        clear([input]);
    };

    clearBtn.addEventListener('click', clear.bind(this, [input]));
    submitBtn.addEventListener('click', submit);
};

const init = () => {
    task9();
    task18();
};

document.addEventListener('DOMContentLoaded', init);
