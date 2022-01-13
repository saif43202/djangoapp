import React, { Component } from 'react'

export default class Hello extends Component {
    constructor(props){
        super(props);
        console.log("constructor")
    }
    componentDidMount(){
        console.log("Did mount")
    }
    render() {
        console.log("render")
        return (
            <div>
                
            </div>
        )
    }
}
