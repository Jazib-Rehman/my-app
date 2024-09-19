import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ProfileLayout from "./layout/ProfileLayout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import CreateBlog from "./pages/blogs/createBlog";
import UpdateBlog from "./pages/blogs/updateBlog";
import Cards from "./pages/blogs/cards";
import Blog from "./pages/blogs/Blog";
import "./App.css";
import UserLayout from "./layout/UserLayout";
import AllBlogs from "./pages/AllBlogs";
import Protected from "./Routes/Protected";
import ViewBlog from "./pages/ViewBlog";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route exact element={<UserLayout />} >
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/blogs" element={<AllBlogs />} />
          <Route path="/:id" element={<ViewBlog />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
      <Routes>
        <Route exact element={<ProfileLayout />} >
          <Route
            path="/blog/create"
            element={
              <Protected isLoggedIn={true}>
                <CreateBlog />
              </Protected>
            }
          />
          <Route
            path="/blog/update/:id"
            element={
              <Protected isLoggedIn={true}>
                <UpdateBlog />
              </Protected>
            }
          />
          <Route
            path="/blogs/view"
            element={
              <Protected isLoggedIn={true}>
                <Cards />
              </Protected>
            }
          />
          <Route
            path="/blog/:id"
            element={
              <Protected isLoggedIn={true}>
                <Blog />
              </Protected>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
