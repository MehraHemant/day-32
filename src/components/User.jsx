import React, { useState, useEffect } from "react";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import axios from "../Api";
import { borderRadius } from "@mui/system";
const User = () => {
  const [active, setActive] = useState([]);
  const [count, setCount] = useState(0);

  let userDelete = async (id) => {
    try {
      await axios.delete(`/user/${id}`);
      let user = active.findIndex((el) => el.id === id);
      active.splice(user, 1);
      setCount((c) => c + 1);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    setActive(active);
  }, [count]);

  useEffect(() => {
    getData();
  }, []);

  let getData = async () => {
    try {
      let response = await axios.get("/user");
      setActive(response.data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <h1>User Management</h1>
      <div className="card mb-4">
        <div className="card-header">
          <div className="row">
            <div className="col col-md-6">
              <ManageAccountsIcon /> User Management
            </div>
          </div>
        </div>
        <div className="card-body">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Image</th>
                <th>User Unique ID</th>
                <th>User Name</th>
                <th>Email Address</th>
                <th>Password</th>
                <th>Contact No.</th>
                <th>Address</th>
                <th>Created On</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {active.map((el) => {
                return (
                  <tr>
                    <td>
                      <img
                        src={`${el.image}`}
                        className="img-thumbnail"
                        style={{ width: "85px", borderRadius: "50px" }}
                      />
                    </td>
                    <td>{el.uniqueId}</td>
                    <td>{el.name}</td>
                    <td>{el.emailId}</td>
                    <td>{el.password}</td>
                    <td>{el.contactNo}</td>
                    <td>{el.Address}</td>
                    <td>{el.createdOn}</td>
                    <td>
                      <button
                        type="button"
                        name="delete_button"
                        className="btn btn-danger btn-sm"
                        onClick={() => {
                          userDelete(el.id);
                        }}
                      >
                        Delete
                      </button>
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

export default User;
