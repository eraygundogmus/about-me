import React from "react"
import PropTypes from "prop-types"

class Comment extends Component {

    static defaultProps = {
        title : "İsim soyisim",
        email : "...@gmail.com",
        date : "12.12.2012"
    }
}


render() 
    const {title,email,date} = this.props;
    return (
        <div className="Cards">
        <div className="Comments_1"></div>
            <ul>
                <li> {title} </li>
                 <li> {email} </li>
                <li> {date} </li>
            </ul>
        </div>     )


export default Comment