import React, { useState } from "react";
import TableViewIcon from "@mui/icons-material/TableView";
import Table from "../components/Table";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";

const Book = () => {
  const [spinner, setSpinner] = useState(false);

  let getInfo = (val) => {
    setSpinner(val);
    console.log(val);
  };

  return spinner ? (
    <div>
      <Spinner />
    </div>
  ) : (
    <div>
      <h1>Book Management</h1>
      <div className="card mb-4">
        <div className="card-header">
          <div className="row">
            <div className="col col-md-6">
              <TableViewIcon /> Book Management
            </div>
            <div className="col col-md-6" align="right">
              <Link to="AddBook" className="btn btn-success btn-sm">
                Add
              </Link>
            </div>
          </div>
        </div>
        <div className="card-body">
          <Table getInfo={getInfo} />
        </div>
      </div>
    </div>
  );
};

export default Book;
