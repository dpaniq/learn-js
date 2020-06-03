function createProduct () {

    // todo hardcode
    const div = document.createElement('div')
    const sku = document.createElement('h6')
    const name = document.createElement('h4')
    const price = document.createElement('em')
    const attribute = document.createElement('strong')
    const checkbox = document.createElement('input')

    div.setAttribute('class', 'product col s3')
    sku.textContent = 'NEW JVC2020'
    name.textContent = 'NEW Acme Dics'
    price.textContent = '$ 1.00'
    attribute.textContent = 'Size 700 MB'
    checkbox.type = 'checkbox'
    checkbox.setAttribute('hidden', 'hidden')



    div.appendChild(sku)
    div.appendChild(name)
    div.appendChild(price)
    div.appendChild(attribute)
    div.appendChild(checkbox)

    return div

}

export {
    createProduct
}
