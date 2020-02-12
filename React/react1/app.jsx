// function Hero(props) {

//     let count = 0

//     function handeClick() {
//         count += 1
//         console.log(count)
//     }

//     return (
//         <div className = 'container'>
//             <div className = 'count'>{ count }</div>
//             <img src = { props.imageUrl } onClick = { handeClick }/>
//             <h1>{ props.title }</h1>
//             <p>{ props.subtitle }</p>
//         </div>
//     )
// }

let Hero = React.createClass({
    getInitialState: function () {
        return {
            count: 100
        }
    }, 

    handeClick: function() {
        console.log('////////////////////////////////////////////////////')
        console.log(this) // All requirements
        this.setState(
            {count: this.state.count - 1}
        )
    },

    render: function(){
        return (
            <div className = 'container'>
                <div className = 'count'>{ this.state.count }</div>
                <img src = { this.props.imageUrl } onClick = { this.handeClick }/>
                <h1>{ this.props.title }</h1>
                <p>{ this.props.subtitle }</p>
            </div>
        )
    }
})

// ReactDOM.render(React.createElement(Hero, null ), document.getElementById('root'))
ReactDOM.render(
    <div>
        <Hero title="React"
            subtitle="Library for make UI"
            imageUrl="./img/react.png"
            />

        <Hero title="Angular"
            subtitle="Framework angular"
            imageUrl="./img/angular.png"
            />

        <Hero title="Ember"
            subtitle="Library Ember"
            imageUrl="./img/ember.png"
            />

        <Hero title="Vue"
            subtitle="Framework vue"
            imageUrl="./img/vue.png"
            />
    
    </div>, 
    document.getElementById('root'))
