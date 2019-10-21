const deleteMusician = async() => {
    const request = await fetch(`${baseUrl}/playlist/delete`)


}
deleteMusician()

const editMusician = async() => {
    const request = await fetch(`${baseUrl}/playlist/edit`)


}
editMusician()

const sortMusicicans = async() => {
    const request = await fetch(`${baseUrl}/playlist/sort`)
}

sortMusicicans()