const paintFooter = (authors) => {
    const listAuthors = document.getElementById("list-authors");
    const fragment = document.createDocumentFragment();

    authors.map((author) => {
        const li = document.createElement("li");

        li.innerHTML = `
            <figure class="imgContainerFooter">
                <a href="${author.linkedin}" target="_blank"><i class="fa-brands fa-linkedin imgIcon"></i></a>
                <a href="${author.github}" target="_blank"><i class="fa-brands fa-github imgIcon"></i></a>
                <figcaption>${author.name}</figcaption>
            </figure>
        `
        fragment.appendChild(li);
    })

    listAuthors.appendChild(fragment);
}

const getAuthors = async () => {
    try {
        const getData = await fetch ("../authors.json");
        const response = await getData.json();
        paintFooter(response);
    } catch (error) {
        console.log("ups, algo salió mal!");
    }
}

getAuthors();