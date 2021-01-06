import React, { Component } from "react";
import PropTypes from "prop-types";
import Comments from "../components/Comments"

//app.js bu benim

class CommentsPage extends Component {
    state = {

        mycomments: [

            {
                id : 1,
                  title : "Anan",
                       email: "rastgele@gmail.com"
            }
        ]

         
    }
    render() {
        const {title,email,date} = this.props;

        return (
            <div className="Comments__me">
            <div className="Cards">
                <div className="Comments_1"></div>
                <ul>
                    <li> {this.state.title} </li>
                    <li> {this.state.email} </li>
                    <li> {this.state.date} </li>
                </ul>
                <Comments comments = {this.state.comments}/>
            
            
            </div>     
       </div>
        )
    }
}

CommentsPage.defaultProps = {
    title : "İsim Soyisim",
    email : "....@gmail.com",
    date :  "12.12.2012"
}

CommentsPage.propTypes = {
    title : PropTypes.string.isRequired,
    email : PropTypes.string.isRequired,
    date :  PropTypes.string.isRequired

}


export default CommentsPage