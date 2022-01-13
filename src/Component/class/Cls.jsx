import React from "react";
export default class Cls extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "saif",
    };
  }
  updateState()
  {
      this.setState({
          name:'Kaif'
      })
  }
  render() {
    return (
      <div>
        <h1>{this.props.dataone}</h1>
        <h1>{this.state.name}</h1>
        <button onClick={()=>{this.updateState()}}>Update</button>
      </div>
    )
  }
}
