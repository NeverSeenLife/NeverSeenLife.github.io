import React from 'react';

const zadyma = 99;
const siema = zadyma + 1;

const xd = () => {
    console.log(zadyma);
    document.getElementById('test').textContent = "siema";

    let styles = `
        font-size: 2em;
        color: blue;
        text-align: center; `;
    document.getElementById('test').style = styles;
    document.getElementById('test').classList.toggle('siemaaaaaa');
};

const Yolo = () => {
    return (
        <div>
        <h2 id="test">YOLO TU JEST {siema}</h2>
        <button onClick={xd}>ES</button>
        </div>
    )
}

export default Yolo;