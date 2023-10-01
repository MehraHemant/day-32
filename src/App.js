import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Portal from "./components/Portal";
import Book from "./components/Book";
import User from "./components/User";
import BooksIssued from "./components/BooksIssued";
import AddBook from "./components/AddBook";
import IssuedBookManagement from "./components/IssuedBookManagement";
import ViewDetail from "./components/ViewDetail";
import Dashboard from "./components/Dashboard";
import { UserProvider } from "./components/UserContext";
import EditBook from "./components/EditBook";

function App() {
  return (
    // <UserProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portal />}>
          <Route index element={<Dashboard />} />
          <Route path="book" element={<Book />} />
          <Route path="user" element={<User />} />
          <Route path="bookIssued" element={<BooksIssued />} />
          <Route path="book/AddBook" element={<AddBook />} />
          <Route
            path="IssuedBookManagement"
            element={<IssuedBookManagement />}
          />
          <Route path="bookIssued/viewDetails/:id" element={<ViewDetail />} />
          <Route path="/book/edit/:id" element={<EditBook />} />
        </Route>
      </Routes>
    </BrowserRouter>
    // </UserProvider>
  );
}

export default App;
