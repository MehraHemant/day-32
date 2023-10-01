import React, { useContext, useState, useEffect } from "react";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import { Link } from "react-router-dom";
import axios from "../Api";
import Spinner from "./Spinner";

const BooksIssued = () => {
  const [spinner, setSpinner] = useState(true);
  const [id, setId] = useState([]);
  useEffect(() => {
    getdata();
  }, []);
  let getdata = async () => {
    let response = await axios.get("/user");
    setId(response.data);
    if (response.status === 200) {
      setSpinner(false);
    }
  };
  return spinner ? (
    <div>
      <Spinner />
    </div>
  ) : (
    <div>
      <h1>Issued Book Management</h1>
      <div className="card mb-4">
        <div className="card-header">
          <div className="row">
            <div className="col col-md-6">
              <ManageSearchIcon /> Issue Book Management
            </div>
            <div className="col col-md-6" align="right">
              <Link
                to="/IssuedBookManagement"
                className="btn btn-success btn-sm"
              >
                Add
              </Link>
            </div>
          </div>
        </div>
        <div className="card-body">
          <table className="table table-bordered text-center">
            <thead>
              <tr>
                <th>Book ISBN Number</th>
                <th>User Unique ID</th>
                <th>Issue Date</th>
                <th>Return Date</th>
                <th>Late Return Fines</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {id.map((el, i) => {
                return (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{el.uniqueId}</td>
                    <td>{el.issueDate}</td>
                    <td>{el.returnDate}</td>
                    <td>₹ {el.returnFine}</td>
                    <td>
                      <span class="badge bg-primary">Return</span>
                    </td>
                    <td>
                      <Link
                        to={`viewDetails/${el.id}`}
                        className="btn btn-info btn-sm"
                      >
                        View
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BooksIssued;
