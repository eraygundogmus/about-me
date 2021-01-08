import React from 'react'

export const defaultValue = {
    mycomments: [
        {
                id: 1,
<<<<<<< HEAD
                name: "Monica Galler",
                email: "monicagaller@gmail.com",
                text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eleifend ex egestas tincidunt porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultricies leo vitae luctus tempus. Praesent fringilla tellus nec libero mattis luctus. Vestibulum aliquam nunc molestie, fringilla velit quis, porttitor ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam eleifend est in est placerat tristique. Ut accumsan erat in sem feugiat consequat. Duis tellus leo, sodales sed placerat efficitur, dignissim a elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis at justo rutrum, rutrum arcu aliquet, dictum odio. Phasellus auctor, lorem ut consectetur bibendum, erat arcu accumsan dolor, eu eleifend erat sapien eget leo."
                
        },
        {
            id: 2,
            name: "Ross Galler",
            email: "rossgaller@gmail.com",
            text : "Vivamus nec risus quis lectus pretium lacinia. Morbi eu nulla orci. Pellentesque aliquam cursus fermentum. Vivamus porta tincidunt nunc. Pellentesque ultricies sapien sed egestas tempus. Quisque ligula augue, pellentesque nec fringilla ut, bibendum eget sapien. Pellentesque tempus, lacus ac iaculis ullamcorper, lectus orci accumsan mauris, ac fringilla urna mi nec tortor. Aenean venenatis ac justo vitae lobortis. Aenean volutpat mauris a est commodo, nec pretium eros pulvinar. Nam non viverra ex. Morbi at sollicitudin tellus."
=======
                name: "Eray Gundogmus",
                email: "gundogmuseray@gmail.com",
                text : "alalalalalala"
>>>>>>> f1823e9784d2e44ab2f6a5a859f2896659dc2cbf

        },
        {
            id: 2,
            name: "Eray Gundogmu33s",
            email: "gundogmuseray@gmail.com",
            text : "alalalalalala"

        },
        {
            id: 3,
<<<<<<< HEAD
            name: "Chandler Bing",
            email: "chandlerbing@gmail.com",
            text : "Vivamus tincidunt nisl elit, ac vehicula nisi commodo nec. Aliquam pharetra, sem sit amet mollis interdum, enim nibh faucibus elit, mollis ultricies est ligula nec mi. Morbi in consequat lectus. Aenean non ex eleifend, aliquet est ac, posuere nisl. Vivamus cursus in augue posuere dapibus. Fusce faucibus at lacus vel laoreet. Duis nec lectus iaculis, iaculis est eu, ultrices est. Phasellus ipsum sapien, lobortis in sollicitudin in, mattis in quam. Sed et orci gravida, suscipit elit a, blandit quam."
=======
            name: "Eray Gundogm3435us",
            email: "gundogmuser3535ay@gmail.com",
            text : "alalalala1231lala"
>>>>>>> f1823e9784d2e44ab2f6a5a859f2896659dc2cbf
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
