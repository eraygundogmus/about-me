import React, { Component } from 'react'

class AddComment extends Component {

    state = {
        name: "",
        email: "",
        comment: ""



    }

    addComment = (e) => {
        e.preventDefault();
        const {name,email,comment} = this.state;


        const newComment = {
            name:name,
            email:email,
            comment:comment


        }
        console.log(newComment);

    }
changeInput = (e) => {

    this.setState({

        [e.target.name] : e.target.value

    })
}


    render() {
        const {name,email,comment} = this.state;
        return (
            <div className= "col-md-8 mb-4">

            <div className= "card">

                <div className= "card-header">
                    <h4>Add Comment</h4>
                </div>
                <div className= "card-body"> 
                <form onSubmit ={this.addComment}> 
                    <div className="form-group">
                        <label htmlFor="title">Name</label>
                        <input 
                            type= "text"
                            name= "name"
                            id = "id"
                            placeholder = "your name"
                            className ="form-control"
                            value= {name}
                            onChange = {this.changeInput}
                        
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="title">Email</label>
                        <input 
                            type= "text"
                            name= "email"
                            id = "email"
                            placeholder = "your email"
                            className ="form-control"
                            value= {email}
                            onChange = {this.changeInput}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="title">Comment</label>
                        <input 
                            type= "text"
                            name= "comment"
                            id = "comment"
                            placeholder = "your comment"
                            className ="form-control"
                            value= {comment}
                            onChange = {this.changeInput}
                        />
                    </div>
                    <br/>

                    <button className="btn btn-danger btn-block" type="submit">Add comment</button>
                </form>
                
                </div>

            </div>
                
            </div>
        )
    }
}

export default AddComment