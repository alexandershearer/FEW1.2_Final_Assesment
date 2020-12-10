import React, { Component } from 'react'
import data from './metal.json'
import './Band.css'
import BandSpace from './BandSpace';

function Band() {

    const bands = data.map(({ band_name, formed, origin, fans, split }) => {
        return (
            <BandSpace
                key={band_name}
                band_name={band_name}
                formed={formed}
                origin={origin}
                fans={fans}
                split={split}
            />
        )
    })

    return (
        <div className="BandList">
            {bands}
        </div>
    )
}

export default Band
