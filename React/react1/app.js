//                   dom element / proporties (null) / cointents

const image = React.createElement('img', { src: './img/react.png' })
const title = React.createElement('h1', null, 'Привет React')
const subtitle = React.createElement('p', null, 'Library for make UI')
const container = React.createElement('div', { className: 'container' }, image, title, subtitle)

// react.element / DOM element / 
ReactDOM.render(container, document.getElementById('root'))
