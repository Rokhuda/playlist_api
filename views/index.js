// // let baseUrl = "http://127.0.0.1:3090"

// // Adding a musician
// const addMusician = async() => {
//     let data = {
//         name: document.getElementById('addMusician').value,
//     }
//     console.log(data)

//     const request = await fetch('/playlist/add', {
//         method: 'POST',
//         header: {
//             'Content-Type': 'application/json',
//             'Accept': 'application/json'
//         },
//         body: JSON.stringify(data)
//     })
//     const response = await request.json()
//     console.log(response.musicians)
// }
// addMusician()

// // Editing an existing musician
// const editMusician = async() => {
//     let data = {
//         name: document.getElementById('edit-delete').value,
//     }
//     fetch("/edit:id" + id, {
//         method: 'PATCH',
//         body: JSON.stringify({
//             data
//         })
//     }).then((response) => {
//         response.json().then((response) => {
//             console.log(response);
//         })
//     }).catch(err => {
//         console.error(err)
//     })

// }
// editMusician()

//Deleting an existing musician
// const deleteMusician = async() => {
//     let data = {
//         name: document.getElementById('deleteMusician').value,
//     }
//     fetch("/playlist/delete:id", {
//         method: 'delete'
        
//     }).then((response) => {
//         response.json()
//         .then((response) => {
//             console.log(response);
//         })
//     }).catch(err => {
//         console.error(err)
//     })
// }
// deleteMusician()

// // List all musicians in the playlist
// const getMusucisians = async() => {
//     console.log('right test')
//     const request = await fetch('/playlist/all')
//     const response = await request.json()
//     console.log(response)
//     document.getElementById("musicians").innerHTML = ""
//     for (let i = 0; i < response.name.length; i++) {
//         document.getElementById("musicians")
//             .innerHTML += "<br>", response
//             .name[i], "<br>"
//         console.log(response.name[i])
//     }
// }
// getMusucisians()

// //Sorting musicains list alphabetically
// const sortMusucisians = async() => {
//     const request = await fetch('/playlist/sort')
//     const response = await request.json()
//     document.getElementById("musicians").innerHTML = ""
//     for (let i = 0; i < response.name.length; i++) {
//         document.getElementById("musicians")
//             .innerHTML += "<br>", response
//             .name[i], "<br>"
//         console.log(response.name[i])
//     }
// }
// sortMusucisians()




// const list = async() => {

//     const request = await fetch("mongodb://127.0.0.1:27017/playlistdb/all")
//     const response = await request.json()
//     console.log(response)
//     document.getElementById("musicians").innerHTML = ""
//     for (let i = 0; i < response.name.length; i++) {
//         document.getElementById("musicians")
//             .innerHTML += "<br>", response
//             .name[i], "<br>"
//         console.log(response.name[i])
//     }
// }


// const list = async() => {

//     const list = document.getElementById("musicians")
//     fetch("mongodb://127.0.0.1:27017/playlistdb/all", {
//             method: "get"
//         })
//         .then((response) => {
//             response.json()
//         })
//         .then((response) => {
//             for (let i = 0; i < response.name.length; i++) {
//                 document.getElementById("musicians")
//                     .innerHTML += "<br>", response
//                     .name[i], "<br>"
//                 console.log(response.name[i])
//             }
//         })
//         .catch(err => {
//             console.error(err)
//         })
// }