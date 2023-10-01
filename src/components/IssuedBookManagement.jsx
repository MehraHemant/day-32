import React from "react";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
const IssuedBookManagement = () => {
  return (
    <div>
      <h1>Issued Book Management</h1>
      <div className="row">
        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-header">
              <PersonAddIcon /> Issue New Book
            </div>
            <div className="card-body">
              <form method="post">
                <div className="mb-3">
                  <label className="form-label">Book ISBN Number</label>
                  <input
                    type="text"
                    name="book_id"
                    id="book_id"
                    className="form-control"
                  />
                  <span id="book_isbn_result"></span>
                </div>
                <div className="mb-3">
                  <label className="form-label">User Unique ID</label>
                  <input
                    type="text"
                    name="user_id"
                    id="user_id"
                    className="form-control"
                  />
                  <span id="user_unique_id_result"></span>
                </div>
                <div className="mt-4 mb-0">
                  <input
                    type="submit"
                    name="issue_book_button"
                    className="btn btn-success"
                    value="Issue"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IssuedBookManagement;
