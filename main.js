const value1 = Math.floor(Math.random() * 10);
const value2 = Math.floor(Math.random() * 10);

const number1 = () => {
    document.getElementById("main_content").innerHTML = (`
    <section id="main_section">
        <div>
            <input class="main_data" value=${value1}>
            <label class="main_sum">+</label>
            <input class="main_data" value=${value2}>
            <label class="main_sum">=</label>
            <input class="main_write" id="result1">
            <button id="main_button" onclick="power1()">Comprobar</button>
        </div>
        <div>
        <p id="result2"></p>
        </div>
    </section>
    `);
}


const power1 = () => {
    const data = document.getElementById("result1").value;
    if (data == value1 + value2) {
        document.getElementById("result2").innerHTML = (`<p class="main_correct">Correcto!!</p>`)
    } else {
        document.getElementById("result2").innerHTML = (`<p class="main_incorrect">Incorrecto! el resultado de ${value1} + ${value2} es ${value1 + value2}</p>`)

    }
}



