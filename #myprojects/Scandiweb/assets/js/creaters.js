function createProduct () {

    // todo hardcode
    const div = document.createElement('div')
    const sku = document.createElement('h6')
    const name = document.createElement('h4')
    const price = document.createElement('em')
    const attribute = document.createElement('strong')
    const checkbox = document.createElement('input')

    div.setAttribute('class', 'product col s3')
    // sku.textContent = 'NEW JVC2020'
    // name.textContent = 'NEW Acme Dics'
    // price.textContent = '$ 1.00'
    // attribute.textContent = 'Size 700 MB'
    checkbox.type = 'checkbox'
    checkbox.setAttribute('hidden', 'hidden')



    div.appendChild(sku)
    div.appendChild(name)
    div.appendChild(price)
    div.appendChild(attribute)
    div.appendChild(checkbox)

    return div

}

function attributeDvd() {
    const div = document.createElement('div')
    const p = document.createElement('p')
    const input = document.createElement('input')

    // div.setAttribute('class', 'product col s3')
    // sku.textContent = 'NEW JVC2020'
    // name.textContent = 'NEW Acme Dics'
    // attribute.textContent = 'Size 700 MB'
    // checkbox.type = 'checkbox'
    // checkbox.setAttribute('hidden', 'hidden')

    input.type = 'text'
    input.name = 'size'
    input.placeholder = '0'
    p.textContent = 'Type a size (MB) of DVD disk'


    div.appendChild(input)
    div.appendChild(p)


    console.log('in createors')
    return div
}


// <form method="post" action="/product/dvd/">
//     <input type="text" name="size" placeholder="0 (size mb)">
//     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam consequatur corporis ducimus magni quae quaerat quos repellat, sequi tempora voluptate.</p>
// <button type="submit">TRy</button>
//     </form>
//     <form method="post" action="/product/book/">
//     <input type="text" name="weight" placeholder="0.00 (weight kg)">
//     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab amet aspernatur atque commodi delectus dolore dolorem eligendi eveniet hic iure laboriosam laudantium maxime minima modi necessitatibus, officia pariatur quaerat quod ratione recusandae reiciendis repellendus tempore totam voluptate voluptates voluptatibus voluptatum?</p>
// </form>
// <form method="post" action="/product/furniture/">
//     <input type="text" name="width" placeholder="0 (width cm)">
//     <input type="text" name="height" placeholder="0 (height cm)">
//     <input type="text" name="length" placeholder="0 (length cm)">
//     <p>Please provide dimensions in H (height) x W (weight) x L (length) format</p>
// </form>



// export {
//     createProduct,
//     attributeDvd
// }

module.exports = {
    attributeDvd
}
