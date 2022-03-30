// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './components/App';

// ReactDOM.render(<App />, document.getElementById('root'));

// import sortBy from 'lodash/sortBy';

let list = [2, 3, 5, 1, 4, 6, 7, 8, 2];

let container = `<div>${list}</div>`;

document.getElementById('root').innerHTML = `
<button id="button"> sort </button>
${container}
`;

document.getElementById('button').addEventListener('click', function () {
    import('lodash/sortBy')
        .then((module) => module.default)
        .then((sortBy) => {
            console.log(sortBy(list));
            container = `<div>${sortBy(list)}</div>`;
            document.getElementById('root').innerHTML = `
<button id="button"> sort </button>
${container}
`;
        })
        .catch((err) => console.log(err));
});
