import React, { useEffect, useState } from "react";
import { Card } from "antd";
// import { getAllBlogs } from "../../services/api";
import { Link } from "react-router-dom";
const { Meta } = Card;

const AllBlogs = () => {
    const [blogs, setBlogs] = useState([]);

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
                        <Link to={`/${item._id}`}>
                            <Card
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
                            </Card>
                        </Link>
                    </div>
                );
            })}
        </div>
    );
};

export default AllBlogs;
