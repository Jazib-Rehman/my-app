import React, { useEffect, useState } from "react";
import { Avatar, Card, message } from "antd";
// import { getAllBlogs } from "../../services/api";
import { Link, useNavigate } from "react-router-dom";
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { deleteBlog } from "../../services/api";
const { Meta } = Card;

const Cards = () => {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  const deleteOneBlog = async (id) => {
    try {
      const { data } = await deleteBlog(id)
      console.log({ data })
    } catch (error) {
      console.log({ error })
    }
  }

  const getData = async () => {
    try {
      // const { data } = await getAllBlogs();
      // setBlogs(data);
      setBlogs([
        {
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBYvzaFHCF7wRhGmE5UvaYIXIEgO-et0Q71w&usqp=CAU",
          title: "This is title text 1",
          description: "this is description Text"
        },
        {
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBYvzaFHCF7wRhGmE5UvaYIXIEgO-et0Q71w&usqp=CAU",
          title: "This is title text 2",
          description: "this is description Text"
        },
        {
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBYvzaFHCF7wRhGmE5UvaYIXIEgO-et0Q71w&usqp=CAU",
          title: "This is title text 3",
          description: "this is description Text"
        },
        {
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBYvzaFHCF7wRhGmE5UvaYIXIEgO-et0Q71w&usqp=CAU",
          title: "This is title text 4",
          description: "this is description Text"
        },
        {
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBYvzaFHCF7wRhGmE5UvaYIXIEgO-et0Q71w&usqp=CAU",
          title: "This is title text 5",
          description: "this is description Text"
        },
        {
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBYvzaFHCF7wRhGmE5UvaYIXIEgO-et0Q71w&usqp=CAU",
          title: "This is title text 5",
          description: "this is description Text"
        },
        {
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBYvzaFHCF7wRhGmE5UvaYIXIEgO-et0Q71w&usqp=CAU",
          title: "This is title text 5",
          description: "this is description Text"
        },
        {
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBYvzaFHCF7wRhGmE5UvaYIXIEgO-et0Q71w&usqp=CAU",
          title: "This is title text 5",
          description: "this is description Text"
        },
        {
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBYvzaFHCF7wRhGmE5UvaYIXIEgO-et0Q71w&usqp=CAU",
          title: "This is title text 5",
          description: "this is description Text"
        },
      ]);
    } catch (error) {
      console.log({ error });
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div style={{ width: "100%", display: "flex", flexWrap: "wrap" }}>
      {blogs.map((item, i) => {
        return (
          <div style={{ width: "33.33%", padding: "10px" }} key={i}>
            {/* <Card
                hoverable
                style={{
                  width: "100%",
                  padding: "10px",
                }}
                cover={
                  <img
                    alt="example"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBYvzaFHCF7wRhGmE5UvaYIXIEgO-et0Q71w&usqp=CAU"
                  />
                }
                >
                <Meta title={item.title} description={item.description} />
              </Card> */}
            <Card
              style={{
                width: 300,
              }}
              cover={
                <Link to={`/blog/${item._id}`}>
                  <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  />
                </Link>
              }
              actions={[
                <EditOutlined onClick={() => navigate(`/blog/update/${item._id}`)} key="edit" />,
                <DeleteOutlined onClick={() => deleteOneBlog(item._id)} key="delete" />,
              ]}
            >
              <Link style={{ textDecoration: 'none' }} to={`/blog/${item._id}`}>
                <Meta
                  avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
                  title={item.title}
                  description={item.description}
                />
              </Link>
            </Card>
          </div>
        );
      })}
    </div >
  );
};

export default Cards;
