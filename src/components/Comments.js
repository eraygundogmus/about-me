import React, { Component } from 'react'
import Comment from "./Comment"
import { CommentContext } from "../context"

const Comments = () => {
    const context = React.useContext(CommentContext)

    return (
        <div>
            {context.mycomments.map(({id, name, email, text}) =>
                <Comment key={id} id={id} name={name} email={email} text={text}/> 
            )}
        </div>
    )
}

export default Comments