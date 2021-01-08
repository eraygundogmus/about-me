import React, {Component} from "react"
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
            <div className="conteiner-fluid">

                <AddComment />
                <Comments mycomments={this.state.mycomments} />
            </div>
        )
    }
}

export default Appp