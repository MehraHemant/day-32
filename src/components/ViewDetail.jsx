import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../Api";
import Spinner from "./Spinner";

const ViewDetail = () => {
  const [data, setData] = useState([]);
  const [book, setBook] = useState([]);
  const [spinner, setSpinner] = useState(true);
  const params = useParams();

  useEffect(() => {
    getdata(params.id);
  }, []);
  let getdata = async (id) => {
    try {
      let response = await axios.get(`/user/${id}`);
      let response1 = await axios.get(`/library/${id}`);
      setData(response.data);
      setBook(response1.data);
      if (response.status === 200) {
        setSpinner(false);
      }
    } catch (e) {
      console.log(e);
    }
  };
  return spinner ? (
    <div>
      <Spinner />
    </div>
  ) : (
    <div>
      <h1>Issue Book Management</h1>
      <ol className="breadcrumb mt-4 mb-4 bg-light p-2 border">
        <li className="breadcrumb-item active">View Issue Book Details</li>
      </ol>
      <h2>Book Details</h2>
      <hr style={{ width: "12%" }} />
      <table className="table ">
        <tr>
          <th width="30%">Book ISBN Number</th>
          <td width="70%">{book.i}</td>
        </tr>
        <tr>
          <th width="30%">Book Title</th>
          <td width="70%">{book.book}</td>
        </tr>
        <tr>
          <th width="30%">Author</th>
          <td width="70%">{book.author}</td>
        </tr>
      </table>
      <br />
      <h2>User Details</h2>
      <hr style={{ width: "12%" }} />
      <table className="table ">
        <tr>
          <th width="30%">User Unique ID</th>
          <td width="70%">{data.uniqueId}</td>
        </tr>
        <tr>
          <th width="30%">User Name</th>
          <td width="70%">{data.name}</td>
        </tr>
        <tr>
          <th width="30%">User Address</th>
          <td width="70%">{data.Address}</td>
        </tr>
        <tr>
          <th width="30%">User Contact No.</th>
          <td width="70%">{data.contactNo}</td>
        </tr>
        <tr>
          <th width="30%">User Email Address</th>
          <td width="70%">{data.emailId}</td>
        </tr>
        <tr>
          <th width="30%">User Image</th>
          <td width="70%">
            <img src={`${data.image}`} className="img-thumbnail" width="100" />
          </td>
        </tr>
      </table>
      <br />
      <h2>Issue Book Details</h2>
      <hr style={{ width: "21%" }} />
      <table className="table ">
        <tr>
          <th width="30%">Book Issue Date</th>
          <td width="70%">{data.issueDate}</td>
        </tr>
        <tr>
          <th width="30%">Book Return Date</th>
          <td width="70%">{data.returnDate}</td>
        </tr>
        <tr>
          <th width="30%">Book Issue Status</th>
          <td width="70%">
            <span className="badge bg-primary">Return</span>
          </td>
        </tr>
        <tr>
          <th width="30%">Total Fines</th>
          <td width="70%">
            <span style={{ fontFamily: "DejaVu Sans" }}>&#8377;</span>&nbsp;
            {data.returnFine}
          </td>
        </tr>
      </table>
    </div>
  );
};

export default ViewDetail;
