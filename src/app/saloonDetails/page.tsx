import React from "react";
import * as Stylex from "@stylexjs/stylex";
import Image from "next/image";
import Sal1 from "../../../public/assets/sal1.webp";

const x = Stylex.create({
  centerChild: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  main: {
    width: "100%",
    height: "100%",
    padding: "20px 0",
  },
});

const page = () => {
  return (
    <main {...Stylex.props(x.main, x.centerChild)}>
      <div
        style={{
          width: "90%",
          display: "flex",
          justifyContent: "start",
          flexDirection: "column",
          gap: 10,
        }}
      >
        <div style={{ width: "100%", display: "flex" }}>
          <h1>Saloon Rish</h1>
        </div>
        <div style={{ width: "100%", display: "flex", gap: 10 }}>
          <p>4.6 ***** (19)</p>
          <p>Open until 10:00PM</p>
        </div>
        <div
          style={{ display: "flex", width: "100%", height: "500px", gap: 20 }}
        >
          <div style={{ width: "60%", height: "500px" }}>
            <Image
              src={Sal1}
              alt=''
              style={{ width: "100%", height: "100%", borderRadius: 10 }}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "40%",
              height: "500px",
              gap: 20,
              border: "1px solid #00000025",
              borderRadius: 10,
            }}
          >
            <div
              style={{ width: "100%", display: "flex", padding: "10px 20px" }}
            >
              <h2>Saloon Rish</h2>
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                padding: "0 20px",
                gap: 10,
              }}
            >
              <p>4.6 ***** (540)</p>
            </div>
            <div style={{ width: "100%", display: "flex", padding: "0 20px" }}>
              <button
                style={{
                  width: "100%",
                  padding: "12px 0",
                  border: "none",
                  backgroundColor: "#1a1a1a",
                  color: "#fff",
                  borderRadius: "10px",
                  fontSize: "18px",
                  fontWeight: 600,
                }}
              >
                Book Now
              </button>
            </div>
            <div
              style={{
                content: "",
                width: "100%",
                height: 2,
                backgroundColor: "#d9d9d9",
              }}
            ></div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
