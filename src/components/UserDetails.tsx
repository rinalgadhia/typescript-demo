import React from 'react';

interface Props {

}

const UserDetails: React.FC<Props> = () => {
    return (
        <div>
            <div className="table">
                <thead>
                    <tr>
                        <th>UserName</th>
                        <th>E-mail</th>
                        <th>Phone</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Rinal</td>
                        <td>rinalgadhia@gmail.com</td>
                        <td>9879867242</td>
                        <td><button className="btn btn-info">Edit</button> <button className="btn btn-danger">Delete</button></td>
                    </tr>
                    <tr>
                        <td>Abc</td>
                        <td>abcdef@gmail.com</td>
                        <td>6379867242</td>
                        <td><button className="btn btn-info">Edit</button> <button className="btn btn-danger">Delete</button></td>
                    </tr>
                    <tr>
                        <td>Xyz</td>
                        <td>xyzxyz@gmail.com</td>
                        <td>7579867242</td>
                        <td><button className="btn btn-info">Edit</button> <button className="btn btn-danger">Delete</button></td>
                    </tr>
                    <tr>
                        <td>Pqr</td>
                        <td>pqrpqr@gmail.com</td>
                        <td>8779867242</td>
                        <td><button className="btn btn-info">Edit</button> <button className="btn btn-danger">Delete</button></td>
                    </tr>
                </tbody>
            </div>
        </div>
    )
}

export default UserDetails