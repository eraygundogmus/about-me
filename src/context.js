import React, { Component } from 'react'

const CommentContext = React.createContext();




export class CommentProvider extends Component {
    state = {
        mycomments: [
            {
                    id: 1,
                    name: "Eray Gundogmus",
                    email: "gundogmuseray@gmail.com",
                    text : "alalalalalala"

            },
            {
                id: 2,
                name: "Eray Gundogmu33s",
                email: "gundogmuseray@gmail.com",
                text : "alalalalalala"

        },
        {
            id: 3,
            name: "Eray Gundogm3435us",
            email: "gundogmuser3535ay@gmail.com",
            text : "alalalala1231lala"

    }
        ]

    }

    render() {
        return (
           <CommentContext.Provider value = {this.state}>
               {this.props.children}
           </CommentContext.Provider>
        )
    }
}

const CommentConsumer = CommentContext.Consumer;

export default CommentConsumer