import React from "react"
import { CommentContext } from "../context"

const Comment = ({id, text, email, name}) => {
    const ctx = React.useContext(CommentContext)

    return <div className= "col-md-10 mb-4 px-2 py-2 mx-5">
        <div className= "card">
            <div className = "card-header d-flex justify-content-between">
                <h5 className = "d-inline text-center">{name}</h5>
                <i onClick={() => ctx.removeComment(id)} className="far fa-trash-alt text-center" style={{cursor : "pointer"}}></i>
            </div>
        </div>
        <div className="card-body">
            <p className="card-text"> {email}</p>
            <p className="card-text"> {text}</p>
        </div>
    </div>
}

export default Comment