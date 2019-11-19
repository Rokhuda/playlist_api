const list = async() => {
    const musicians = document.getElementById("musicians")
    try {
        const data = await fetch("http://localhost:3090/playlist/all", {
            method: "get"
        })
        const lists = await data.json()
        lists.forEach(elem => {
            let musician = document.createElement("li")
            musician.textContent = `
            ${elem.name}  ${elem._id}`;
            musicians.appendChild(musician)
            console.log(elem)
        })
    } catch (err) {
        console.log(err)
    }
}
list()