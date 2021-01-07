import React, {Component} from "react"
import Navbar from "./Navbar"
import Comment from "./Comment"
import Comments from "./Comments"

class Appp extends Component {
    state = {
        mycomments: [
            {
                    id: 1,
                    title: "Eray Gundogmus",
                    email: "gundogmuseray@gmail.com",
                    text : "alalalalalala"

            },
            {
                id: 2,
                title: "Eray Gundogmu33s",
                email: "gundogmuseray@gmail.com",
                text : "alalalalalala"

        },
        {
            id: 3,
            title: "Eray Gundogm3435us",
            email: "gundogmuser3535ay@gmail.com",
            text : "alalalala1231lala"

    }
        ]

    }

    render() {

     
        return (
                <div className="conteiner">
                    <Navbar />
                    <Comments mycomments = {this.state.mycomments} />

                </div>

        )

    }
}

export default Appp