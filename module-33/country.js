fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => display(data))

const display = (data) => {
    const container = document.getElementById('container');
    container.style.backgroundColor = 'lightgray';
    for (const country of data) {
        const img = document.createElement('img');
        img.setAttribute('src', country.flags.svg);
        img.style.width = '400px';
        img.style.display = 'block';
        img.style.margin = '10px auto';
        container.appendChild(img);
    }
}