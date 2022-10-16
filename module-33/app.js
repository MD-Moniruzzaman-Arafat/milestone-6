const kanyeWest = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => display(data.quote))
}

const display = (data) => {
    const p = document.getElementById('p');
    p.innerText = data;
}