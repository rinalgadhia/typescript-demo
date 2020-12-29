import React from 'react';

const InsertForm: React.FC = () => {
    return (
        <div>
            <h2>Insert Form</h2>
            <div className="col-6 offset-md-3 mt-3">
                <input className="form-control" type="text" placeholder="Enter UserName" name="username" />
                <br />
                
                <input className="form-control" type="text" placeholder="Enter Email" name="email" />
                <br />

                <input className="form-control" type="text" placeholder="Enter Mobile Number" name="phone_no" />
                <br />

                <input className="form-control" type="text" placeholder="Enter Password" name="password" />
                <br />

                <button className="btn btn-info">
                    Insert
                </button>
                <button className="btn btn-info ml-3">
                    Cancel
                </button>

            </div>
        </div>
    )
}

export default InsertForm