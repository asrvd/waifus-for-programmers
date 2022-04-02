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

export async function getauthor(path) {
    const data = await (await fetch(`https://api.github.com/repos/cat-milk/Anime-Girls-Holding-Programming-Books/commits?path=${path}`)).json();
    // Use commit author as fallback if GitHub doesn't have the authenticated account data
    return data[0]?.author?.login ?? data[0]?.commit?.author?.name;
}

export function getcont(path) {
    return fetch(`https://api.github.com/repos/cat-milk/Anime-Girls-Holding-Programming-Books/contents/${encodeURIComponent(path)}?ref=master`)
    .then(res => res.json())
    .then(data => {
        //console.log(data)
        const newData = data.map((file) => (
            {
                name: file.name,
                url: file.download_url,
                key: file.name,
                path: file.path,
                author: getauthor(file.path),
            }
        ))
        return newData
    })
}
