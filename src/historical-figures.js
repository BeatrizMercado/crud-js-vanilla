//console.log("hola")

//Método GET para obtener datos de figuras históricas desde el servidor
async function getFigures() {
    // Realizar una solicitud GET al servidor en la ruta
    const result = await fetch("http://localhost:3000/historical-figures");
    // Esperar a que la respuesta de la solicitud sea recibida y convertirla en formato JSON
    const data = await result.json()
    // Esperar a que la respuesta de la solicitud sea recibida y convertirla en formato JSON
    return data
}

let sectionTag = document.getElementById("figures-list")
async function printFigures() {
    let figures = await getFigures()
    console.log(figures)
    figures.map(figure => {
        sectionTag.innerHTML +=
        `<h3>${figure.name}</h3>
        <p>${figure.birth}</p>
        <p>${figure.death}</p>
        <p>${figure.field}</p>
        <button onclick="deleteUser('${figure.id}')">Delete</button>`
    })
}

//Método DELETE 
async function deleteFigure(id) {
    const result = await fetch(`http://localhost:3000/historical-figures${id}`, {
        method: "DELETE"
    });
    return result
}

//Método POST 
async function postFigures() {
    const newFigure = {
        "name": "Charles Darwin",
        "birth": "Feb 12, 1809",
        "death": "Apr 19, 1882",
        "field": "Naturalist"
    }

    const options = {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(newFigure),
    };

    const result = await fetch(`http://localhost:3000/historical-figures`, options)
    return result
}

//Método POST 
async function createFigures() {
    const formFigure = document.getElementById("figures-form")

    const newFigure = {
        "name": formFigure.elements[0].value,
        "birth": formFigure.elements[1].value,
        "death": formFigure.elements[1].value,
        "field": formFigure.elements[1].value,
    };

    const result = await fetch(`http://localhost:3000/historical-figures`, {
        method: "POST",
        headers: {
        'Content-Type': 'application/json'},
        body: JSON.stringify(newFigure),
    } )
}

