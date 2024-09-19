import { Button, Layout, Menu, theme } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
// import { getCurrencies } from "../services/api";
import logo from './../assets/logo2.png'
import { Link } from "react-router-dom";

export default function UserLayout() {
    const [currencies, setCurrencies] = useState([]);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    async function getAllCurrencies() {
        try {
            // const { data } = await getCurrencies();
            // const currencyEntries = Object.entries(data);
            // setCurrencies(currencyEntries);
            setCurrencies([{
                currency: "USD",
                rate: 1.2343523
            },
            {
                currency: "INR",
                rate: 1.3216532
            }, {
                currency: "PKR",
                rate: 0.032525
            }, {
                currency: "RYL",
                rate: 2.2353267
            }, {
                currency: "ABC",
                rate: 1.63634
            },
            ]);
        } catch (error) {
            console.log({ error });
        }
    }
    useEffect(() => {
        setInterval(() => {
            getAllCurrencies();
        }, 5000);
    }, []);

    return (
        <Layout>
            <Header
                style={{
                    padding: 0,
                    margin: 0,
                    background: colorBgContainer,
                }}
            >
                <div style={{ width: "100%", display: 'flex', justifyContent: "space-between" }} >
                    <div>
                        <img style={{ height: "65px", marginTop: -2 }} src={logo} />
                    </div>
                    <div style={{ marginRight: "100px" }}>
                        <Button type="link"><Link to={"/blogs"}>Blogs</Link></Button>
                        <Button type="link"><Link to={"/blog/create"}>Create Blogs</Link></Button>
                    </div>
                </div>
            </Header>
            <Content
                style={{
                    minHeight: "90vh",
                }}
            >
                <Outlet />
            </Content >
        </Layout >

    );
}
