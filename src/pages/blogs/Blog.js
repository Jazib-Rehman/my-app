import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { readOneBlog } from "../../services/api";

export default function Blog() {
  const params = useParams();
  const [id, setId] = useState(params.id);
  const [blog, setBlogs] = useState({});
  const getBlog = async () => {
    try {
      // const { data } = await readOneBlog(id);
      // setBlogs(data);
      setBlogs({
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBYvzaFHCF7wRhGmE5UvaYIXIEgO-et0Q71w&usqp=CAU",
        title: "This is title text",
        description: "this is description Text"
      });
    } catch (error) {
      console.log({ error });
    }
  };

  useEffect(() => {
    getBlog();
  }, []);

  return (
    <div>
      <img
        alt="example"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBYvzaFHCF7wRhGmE5UvaYIXIEgO-et0Q71w&usqp=CAU"
        style={{ width: "100%", height: "400px", objectFit: "cover" }}
      />

      <div style={{ textAlign: "center" }}>
        <h1>{blog?.title}</h1>
        <p>{blog?.description}</p>
      </div>
    </div>
  );
}
