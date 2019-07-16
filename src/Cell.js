import React, { Component } from 'react';


class Cell extends Component{

  constructor(props){
    super(props)
    this.state = {
      color: this.props.value
    }
  }
  change = () => {
    this.setState({
      color: "#333"
    })
  }


  render() {
    return (
      <div onClick={this.change} style={{backgroundColor: this.state.color}} className="cell">
            {this.state.color}
      </div>

    )
  }
}
export default Cell
