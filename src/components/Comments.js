import React, { Component } from 'react'
import Comment from "./Comment"

class Comments extends Component {
    render() {
        const {mycomments} = this.props;
        return (
            <div>
                {
                        mycomments.map(thecomments => {
                                return (
                                       <Comment 
                                            key = {thecomments.id}
                                            name = {thecomments.name}
                                            email = {thecomments.email}
                                            text = {thecomments.text}
                                       
                                       /> 
                                )
                        })
    }

            </div>
        )
    }
}


export default Comments