import React from "react";
import { useFormik } from "formik";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import axios from "axios";

const AddBook = () => {
  const formik = useFormik({
    initialValues: {
      book: "",
      i: "",
      category: "",
      author: "",
      locationRack: "",
      created: "",
      action: "",
      copy: "",
    },
    validate: (values) => {
      let errors = {};
      for (let key in values) {
        if (values[key] === "") {
          errors[key] = `please enter a ${key}`;
        }
      }
      return errors;
    },
    onSubmit: async (values) => {
      console.log(values);
      await axios.post(
        "https://631c51974fa7d3264cab5877.mockapi.io/library",
        values
      );
      alert("User Created");
    },
  });
  return (
    <div className="card mb-4">
      <div className="card-header">
        <PersonAddAltIcon /> Add New Book
      </div>
      <div className="card-body">
        <form onSubmit={formik.handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group mb-3">
                <label className="form-label">Book Name</label>
                <input
                  type="text"
                  value={formik.values.book}
                  onChange={formik.handleChange}
                  className="form-control"
                  name="book"
                />
                <span style={{ color: "red" }}>{formik.errors.book}</span>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group mb-3">
                <label className="form-label"> Author Name</label>
                <input
                  type="text"
                  value={formik.values.author}
                  onChange={formik.handleChange}
                  className="form-control"
                  name="author"
                />
                <span style={{ color: "red" }}>{formik.errors.author}</span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className=" form-group mb-3">
                <label className="form-label">Enter Category</label>
                <input
                  type="text"
                  value={formik.values.category}
                  onChange={formik.handleChange}
                  className="form-control"
                  name="category"
                />
                <span style={{ color: "red" }}>{formik.errors.category}</span>
              </div>
            </div>
            <div className="col-md-6">
              <div className=" form-group mb-3">
                <label className="form-label">Enter Location Rack</label>
                <input
                  type="text"
                  value={formik.values.locationRack}
                  onChange={formik.handleChange}
                  className="form-control"
                  name="locationRack"
                />
                <span style={{ color: "red" }}>
                  {formik.errors.locationRack}
                </span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className=" col-md-6">
              <div className=" form-group mb-3">
                <label className="form-label">Book ISBN Number</label>
                <input
                  type="text"
                  value={formik.values.i}
                  onChange={formik.handleChange}
                  className="form-control"
                  name="i"
                />
                <span style={{ color: "red" }}>{formik.errors.i}</span>
              </div>
            </div>
            <div className="col-md-6">
              <div className=" form-group mb-3">
                <label className="form-label">No. of Copy</label>
                <input
                  type="number"
                  value={formik.values.copy}
                  onChange={formik.handleChange}
                  className="form-control"
                  name="copy"
                />
                <span style={{ color: "red" }}>{formik.errors.copy}</span>
              </div>
            </div>
          </div>

          {/* extra */}

          <div className="row">
            <div className=" col-md-6">
              <div className=" form-group mb-3">
                <label className="form-label">Create Time and Date</label>
                <input
                  type="text"
                  value={formik.values.created}
                  onChange={formik.handleChange}
                  className="form-control"
                  name="created"
                />
                <span style={{ color: "red" }}>{formik.errors.created}</span>
              </div>
            </div>
            <div className="col-md-6">
              <div className=" form-group mb-3">
                <label className="form-label">About action</label>
                <input
                  type="number"
                  value={formik.values.action}
                  onChange={formik.handleChange}
                  className="form-control"
                  name="action"
                />
                <span style={{ color: "red" }}>{formik.errors.action}</span>
              </div>
            </div>
          </div>
          {/* ---- */}
          <div className="mt-4 mb-3 text-center">
            <input
              type={"submit"}
              className="btn btn-success"
              value="Submit"
            ></input>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
