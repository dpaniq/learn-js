function createOne(attr = []) {
    let base = attr[0]
    for (let i = 1; i < attr.length; i++){
        base.appendChild(attr[i])
    }
    return base
}

function createNewElement(tag, cls = '', txtc = '', attr = []) {
    const tempElement = document.createElement(tag)
    tempElement.className = cls
    tempElement.textContent = txtc

    for (let i = 0; i < attr.length; i++){
        tempElement.setAttribute(attr[i][0], attr[i][1])
    }

    return tempElement
}

export {
    createOne,
    createNewElement
}