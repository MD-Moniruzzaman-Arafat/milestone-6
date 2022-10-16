fetch('https://randomuser.me/api/?results=1')
    .then(res => res.json())
    .then(data => displayData(data.results[0]))

const displayData = (data) => {
    const div = document.getElementById('div');
    const img = document.createElement('img');
    img.setAttribute('src', data.picture.large);
    const p1 = document.createElement('p');
    p1.innerText = `City : ${data.location.city}`;
    const p2 = document.createElement('p');
    p2.innerText = `Street : ${data.location.street.number}`;
    div.appendChild(img);
    div.appendChild(p1);
    div.appendChild(p2);
}