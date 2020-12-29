import React from 'react'
import { Link } from 'react-router-dom'
import UserDetails from './UserDetails'

interface Props {

}

const Header: React.FC<Props> = () => {
    
    return (
        <div>
            <div className="jumbotron text-white h1 bg-info">
                <span>User Details</span>
                <Link to="/insert">
                    <button className="btn btn-light float-right">Add new</button>
                </Link>
            </div>
            <UserDetails />
        </div>
    )
}

export default Header