import React, { useEffect, useState } from "react";
// import { getCurrencies } from "../services/api";
import banner from './../assets/banner.jpg'
import { Table } from "antd";
export default function Home() {
  const [currencies, setCurrencies] = useState([]);

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


  const columns = [
    {
      title: 'Currency',
      dataIndex: 'currency',
    },
    {
      title: 'Rate',
      dataIndex: 'rate',
      sorter: {
        compare: (a, b) => a.rate - b.rate,
        multiple: 3,
      },
    }
  ];
  const data = [
    // ...currencies.map(([currency, rate], i) => {
    ...currencies.map((item, i) => {
      return {
        key: i,
        currency: item.currency,
        rate: item.rate.toFixed(4)
      }
    })
  ];


  return (
    <div>
      <div style={{ position: "relative" }}>
        <img style={{ width: "100%", height: "400px", objectFit: "cover" }} src={banner} />
        <div style={{
          position: "absolute",
          bottom: 40,
          left: 40,
          color: 'white',
          backgroundColor: "rgba(0,0,0,0.7)",
          borderRadius: "9px",
          padding: "20px 40px 20px 40px"
        }}>
          <h1>Express your thoughts</h1>
          <p style={{ fontSize: 18 }}>View exchange rates and write your thoughts with us.</p>
        </div>
      </div>
      <div style={{ margin: "50px" }}>
        <Table pagination={false} columns={columns} dataSource={data} />
      </div>
      {/* <div
        style={{
          marginTop: "40px",
          borderBottom: "1px solid gray",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <h2>Currency</h2>
        <h2>Rate</h2>
      </div>
      {currencies.map(([currency, rate]) => (
        <div
          style={{
            borderBottom: "1px solid gray",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <p>{item.currency}</p>
          <p>{item.rate.toFixed(4)}</p>
        </div>
      ))} */}
    </div>
  );
}
