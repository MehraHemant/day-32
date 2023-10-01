import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "../Api";

const Table = ({ getInfo }) => {
  const [count, setCount] = useState(0);
  const [book, setBook] = useState([]);

  useEffect(() => {
    getElement();
  }, []);

  let userDelete = async (id) => {
    try {
      await axios.delete(`/library/${id}`);
      let index = book.findIndex((el) => el.id === id);
      book.splice(index, 1);
      console.log(book);
      setCount((c) => c + 1);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    setBook(book);
  }, [count]);

  let getElement = async () => {
    try {
      let response = await axios.get("/library");
      setBook(response.data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Book Name</th>
          <th>ISBN No.</th>
          <th>Category</th>
          <th>Author</th>
          <th>Location Rack</th>
          <th>No. of Copy</th>
          <th>Created On</th>
          <th>Updated On</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {book.map((el, id) => {
          return (
            <tr key={el.id}>
              <td>{el.book}</td>
              <td>{el.i}</td>
              <td>{el.category}</td>
              <td>{el.author}</td>
              <td>{el.locationRack}</td>
              <td>{el.copy}</td>
              <td>{el.created}</td>
              <td>{el.action}</td>
              <td>
                <Link to={`edit/${el.id}`} className="btn btn-sm btn-primary">
                  Edit
                </Link>
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
  );
};

export default Table;
