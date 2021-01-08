import React from 'react'

export const defaultValue = {
    mycomments: [
        {
                id: 1,
                name: "Monica Galler",
                email: "monicagaller@gmail.com",
                text : "Quisque finibus, dolor quis placerat rhoncus, ex risus tincidunt arcu, a ullamcorper mauris felis placerat dolor. Pellentesque lacinia a velit et pellentesque. Nulla facilisi. Aenean vitae porttitor nisl, nec eleifend nibh. Nunc ultrices dui et orci fermentum, ut ullamcorper odio elementum. Aliquam condimentum volutpat neque, sit amet faucibus lacus sagittis sed. Aliquam urna purus, cursus sit amet massa ac, dignissim ullamcorper dui."

        },
        {
            id: 2,
            name: "Chandler Bing",
            email: "chandlerbing@gmail.com",
            text : "Vivamus porta iaculis felis eu rutrum. Phasellus egestas eros ac ipsum venenatis, vel aliquam nisi bibendum. Donec efficitur malesuada risus, vitae tempus lorem gravida eu. Curabitur dignissim malesuada tortor sed interdum. Sed turpis odio, faucibus id enim ac, bibendum malesuada orci. Nullam eleifend nec leo a posuere. Phasellus quis nibh sed nibh tincidunt euismod. Etiam ornare risus in enim suscipit mollis."

        },
        {
            id: 3,
            name: "Ross Galler",
            email: "rossgaller@gmail.com",
            text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis elit sed risus dictum, id cursus risus pulvinar. Etiam eget lorem tortor. Cras tempor dictum arcu. Vestibulum ac tellus libero. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut faucibus malesuada sem, eu dignissim leo euismod sed. Mauris in dapibus sem. Proin aliquet ac sem sed porttitor."
        }
    ],
    removeComment: () => {},
    addComment: () => {}
}

export const CommentContext = React.createContext(defaultValue);

export class CommentProvider extends React.Component {
    constructor(props) {
        super(props)

        this.removeComment = (id) => {
            this.setState(state => ({
                mycomments: state.mycomments.filter(YAHAKSANAGELIYORUM => YAHAKSANAGELIYORUM.id !== id)
            }))
        }

        this.addComment = (comment) => {
            this.setState(state => ({
                mycomments: [
                    ...state.mycomments,
                    { ...comment, id: state.mycomments.length + 1 }
                ]
            }))
        }

        this.state = {
            ...defaultValue,
            removeComment: this.removeComment,
            addComment: this.addComment
        }
    }

    render() {
        return <CommentContext.Provider value={this.state}>
            {this.props.children}
        </CommentContext.Provider>
    }
}
