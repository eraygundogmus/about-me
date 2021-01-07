import React from 'react'

export const defaultValue = {
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
    ],
    removeComment: () => {}
}

export const CommentContext = React.createContext(defaultValue);

export class CommentProvider extends React.Component {
    constructor(props) {
        super(props)

        this.removeComment = (id) => {
            console.log(id)
            this.setState(state => ({
                mycomments: state.mycomments.filter(YAHAKSANAGELIYORUM => YAHAKSANAGELIYORUM.id !== id)
            }))
        }

        this.state = {
            ...defaultValue,
            removeComment: this.removeComment
        }
    }

    render() {
        return <CommentContext.Provider value={this.state}>
            {this.props.children}
        </CommentContext.Provider>
    }
}