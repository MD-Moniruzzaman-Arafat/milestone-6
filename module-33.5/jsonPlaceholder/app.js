// load api
fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => displayData(data))

// display data
const displayData = (datas) => {
    const fixData = datas.slice(0, 20);
    const contaienr = document.getElementById('div-container');
    fixData.forEach(data => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div class="card h-100">
                <div class="card-body">
                    <p class="card-text">${data.body}</p>
                    <button type="button" class="btn btn-primary" onclick="details(${data.id})">details</button>
                </div>
            </div>
        `
        contaienr.appendChild(div);
    });
};

const details = (id) => {
    const url = `https://jsonplaceholder.typicode.com/comments/${id}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayDetail(data))
}

const displayDetail = (detail) => {
    const detailContainer = document.getElementById('details');
    detailContainer.textContent = '';
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="card h-100">
        <div class="card-body">
            <p class="card-text">Name : ${detail.name}</p>
            <p class="card-text">Email : ${detail.email}</p>
        </div>
    </div>
    `
    detailContainer.appendChild(div);
}