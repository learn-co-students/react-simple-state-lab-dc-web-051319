

// 1. Define a `constructor` method in `Cell`, which sets an 
//initial state key of `color` to the `value` prop which is passed 
//from its parent component. Remember to call `super()` on the first 
//line of the constructor (this is required in React components if we 
//are to use `this` in the constructor). Additionally, for props to be 
//accessible within the constructor, we need to pass `props` to both the
// constructor _as well as_ `super`. Ultimately, our constructor should look 
//something like this:


// 2. `Cell` should render a single `<div>` 
// with a className of `cell`
// 3. In render, the cell should set 
// the background color in-line for the 
// `<div>` by adding the following attribute:
//  `style={{backgroundColor: '#FFF'}}` 
//  ('#FFF' is just used as an example value 
//  here - the value should be state's color)
// 4. Create a click listener which, when 
// activated, updates the state to the following hex value: '#333'

import React, {Component} from 'react'
import Matrix from './Matrix.js'
 class Cell extends Component {
      constructor(props){
        super(props)
        this.state = 
        {
            color: props.value
        }
    }

    changeState = () => {
       this.setState({color: "#333"})
    }

    render(){
        return (

            <div onClick={this.changeState}  className="cell" style={{backgroundColor: this.state.color}}></div>

        )
    }
}

export default Cell 

