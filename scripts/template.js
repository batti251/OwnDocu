function quicklinkTemplate(indexedQuicklink, frame){
    return `
    <article>
        <div onclick="openNewTab('${indexedQuicklink.link}', ${frame})">${indexedQuicklink.name} </div>
    </article>
    `
}


function mainContentTemplate(indexedQuicklink) {
    return `
    <iframe src="${indexedQuicklink}" title"">
    </iframe>
    `
}