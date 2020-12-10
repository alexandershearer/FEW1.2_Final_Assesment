import React from 'react'
import './BandSpace.css'
import LikeCounter from './LikeCounter'

function BandSpace(props) {
    const { band_name, formed, origin, fans, split } = props
    return (
        <div className="BandSpace">
            <h1>{band_name}</h1>
            <h3>Formed in {formed}</h3>
            <h3>Originated in {origin}</h3>
            <h4>{fans} Fans</h4>
            {split === "-" ? <LikeCounter></LikeCounter> : <p>Split in {split}</p>}
        </div>
    )
}

export default BandSpace