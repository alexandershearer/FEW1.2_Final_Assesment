import React, { Component } from 'react'
import data from './metal.json'
import './heading.css'

class MetalMeta extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }


    render() {


        return (
            < div >
                <h3>Rock Bands 🤘</h3>
                <h3>{data.length} Bands</h3>
            </ div >
        )
    }
}


export default MetalMeta