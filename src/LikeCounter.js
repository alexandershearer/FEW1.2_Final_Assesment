import React, { Component } from 'react'
import './LikeCounter.css'


class LikeCounter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    upvote = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    downvote = () => {
        this.setState({
            count: this.state.count - 1
        });
    }


    render() {


        return (
            < div className="likeCounter">
                <button className="downvote" onClick={this.downvote}>👎</button>
                <h2>{this.state.count}</h2>
                <button className="upvote" onClick={this.upvote}>👍</button>
            </ div >
        )
    }
}


export default LikeCounter