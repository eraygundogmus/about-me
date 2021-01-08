import React from 'react'
import { CommentContext } from '../context'

const AddComment = () => {
    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [comment, setComment] = React.useState('')

    const ctx = React.useContext(CommentContext)

    const addComment = (e) => {
        e.preventDefault()
        const newComment = { name, email, text: comment }
        ctx.addComment(newComment)
        setName('')
        setEmail('')
        setComment('')
    }

    return (
        <div className= "col-md-10 mb-6 px-2 py-2 mx-5 pt-5">
        <div className= "card">
            <div className= "card-header text-center">
                <h4 className= "text-center">Add Comment</h4>
            </div>
            <div className= "card-body">
            <form onSubmit={addComment}>
                <div className="form-group">
                    <label className="text-center" htmlFor="title">Name</label>
                    <input
                        type= "text"
                        placeholder = "your name"
                        className ="form-control"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </div>


                    <div className="form-group">
                        <label htmlFor="title">Email</label>
                        <input
                            type= "text"
                            placeholder = "your email"
                            className ="form-control"
                            value= {email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="title">Comment</label>
                        <input
                            type= "text"
                            placeholder = "your comment"
                            className ="form-control"
                            value= {comment}
                            onChange={e => setComment(e.target.value)}
                        />
                    </div>
                    <br/>
                    <button className="btn btn-danger btn-block " type="submit">Add comment</button>
                </form>
                </div>
            </div>
        </div>

    )
}

export default AddComment
