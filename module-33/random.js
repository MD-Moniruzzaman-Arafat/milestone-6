fetch('https://randomuser.me/api/?results=500')
    .then(res => res.json())
    .then(data => display(data.results))

const display = (data) => {
    const contaienr = document.getElementById('container');
    for (const user of data) {
        const div = document.createElement('div');
        div.style.backgroundColor = 'lightgray';
        div.style.padding = '10px';
        div.style.margin = '10px';

        const h3 = document.createElement('h3');
        h3.innerText = user.name.first;
        const p = document.createElement('p');
        p.innerText = user.email;
        div.appendChild(h3, p);
        div.appendChild(p);
        contaienr.appendChild(div);
    }
}