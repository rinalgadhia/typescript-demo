import React from 'react';

interface Props {

}

const EditForm: React.FC<Props> = () => {
    return (
        <div>
            <h2>Update Form</h2>
            <div className="col-6 offset-md-3 mt-5">
                <input className="form-control" type="text" placeholder="UserName" name="username" />
                <br />

                <input className="form-control" type="text" placeholder="Email" name="email" />
                <br />

                <input className="form-control" type="text" placeholder="Mobile Number" name="phone_no" />
                <br />

                <button className="btn btn-info">
                    Update
                </button>
                <button className="btn btn-info ml-3">
                    Cancel
                </button>
            </div>
        </div>
    )
}

export default EditForm;