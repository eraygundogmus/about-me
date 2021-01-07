import React, { Component } from "react"
import PropTypes from "prop-types"
import userEvent from "@testing-library/user-event";


class Comment extends Component {
    static defaultProps = {
        title : "İsim Soyisim",
        email : "...@gmail.com",
        thecomment : "Lorem ipsum dolor sim amet"

    }


    render() {

        const {title, email, thecomment} = this.props;
        return (

            <div className= "col-md-8 mb-4">
                <div className= "card">
                    <div className = "card-header d-flex justify-content-between">
                        <h5 className = "d-inline">{title}</h5>
                            <i className = "far fa-trash-alt" style = {{cursor : "pointer"}}></i>
                </div>
                <div className="card-body">
                    <p className="card-text"> {email}</p>
                    <p className="card-text"> {thecomment}</p>
                    </div>

                    </div>
                </div>

        )
    }


}

Comment.defaultProps = {
    title : "İsim Soyisim",
    email : "...@gmail.com",
    thecomment : "Lorem ipsum dolor sim amet"


}

Comment.propTypes = {
    title : PropTypes.string.isRequired,
    email : PropTypes.string.isRequired,
    thecomment : PropTypes.string.isRequired


}


export default Comment