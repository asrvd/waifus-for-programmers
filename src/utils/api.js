export function getfolders() {
    return fetch('https://api.github.com/repos/cat-milk/Anime-Girls-Holding-Programming-Books/contents/')
    .then(res => res.json())
    .then(data => {
        const newData = data.map((folder) => (
            {
                name: folder.name,
                path: folder.path,
                key: folder.name
            }
        ))
        //console.log(newData)
        //console.log(FolderData)
        return newData
    })

}

export function getauthor(path) {
    console.log(path)
    return fetch(`https://api.github.com/repos/cat-milk/Anime-Girls-Holding-Programming-Books/commits?path=${path}`)
    .then(res => res.json())
    .then(data => {
        console.log(data[0].author)
        return data[0].author.login
    })
    .catch(err => {
        console.log(err)
        return "Not Found"
    })
    //const data = await res.json()
    
}

export function getcont(path) {
    return fetch(`https://api.github.com/repos/cat-milk/Anime-Girls-Holding-Programming-Books/contents/${path}?ref=master`)
    .then(res => res.json())
    .then(data => {
        //console.log(data)
        const newData = data.map((file) => (
            {
                name: file.name,
                url: file.download_url,
                key: file.name,
                path: file.path
            }
        ))
        return newData
    })
}

//getfolders()