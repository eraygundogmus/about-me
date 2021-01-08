import React, {Component} from "react"
import Navbar from "./Navbar"
import Comment from "./Comment"
import Comments from "./Comments"
import AddComment from "./AddComment"

class Appp extends Component {
    constructor() {
        super()
        this.state = {
            mycomments: []
        }
    }

    render() {
        return (
            <div className="conteiner">
                <Navbar /> <hr/>
                <AddComment />
                <Comments mycomments={this.state.mycomments} />
            </div>
        )
    }
}

export default Appp