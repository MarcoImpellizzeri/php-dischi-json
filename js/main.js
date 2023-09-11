axios.get("/../api/dischi.php").then(function (response) {
        const dischi_col = document.getElementById("dischi_col")
        const dischi = response.data;

        console_log(response);

        for (let i = 0; i < dischi.length; i++) {
            dischi_col.innerHTML += `
                <div class="card">
                    <img src="${dischi[i].poster}" class="card-img-top" alt="image not found">
                    <div class="card-body">
                        <h5 class="card-title">${dischi[i].title}</h5>
                        <p class="card-text">${dischi[i].author}</p>
                        <p class="card-text">${dischi[i].year}</p>
                    </div>
                </div>
            `;
        }
    });