import userEvent from '@testing-library/user-event';
import React, { Component } from 'react'
import CommentsPage from "../pages/comments.jsx"

class Comments extends Component {
    render() {
        const {comments} = this.props;

        return (
            <div>
                         {

            comments.map(comment => 
                {
                return(
                    <CommentsPage
                    title = {comment.title}
                    email = {comment.email}
                    date = {comment.date}
                    /> )
                }
            
                      }
        
            </div>
        )
    }
}

export default Comments