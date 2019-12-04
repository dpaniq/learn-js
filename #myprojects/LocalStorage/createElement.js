function createElement(tag, cls, txtc) {
    const tempElement = document.createElement(tag)
    tempElement.className = cls
    tempElement.textContent = txtc

    return tempElement
}

export {createElement}