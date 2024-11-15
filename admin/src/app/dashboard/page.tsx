"use client";
import React from "react";
import * as StyleX from "@stylexjs/stylex";
const page = () => {
  return (
    <main {...StyleX.props(x.main)}>
      <div {...StyleX.props(x.container)}>
        <div
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
            width: "100%",
          }}
        >
          <div
            style={{
              width: "30%",
              height: "120px",
              boxShadow: "0 0 5px 0 #00000025",
              borderRadius: "10px",
              flexDirection: "column",
            }}
            {...StyleX.props(x.centerChild)}
          >
            <div
              style={{
                width: "100%",
                height: "40%",
                background: "#F5C100",
                borderTopLeftRadius: "8px",
                borderTopRightRadius: "8px",
              }}
              {...StyleX.props(x.centerChild)}
            >
              Total Bookings
            </div>
            <div
              style={{ width: "100%", height: "60%" }}
              {...StyleX.props(x.centerChild)}
            >
              {2}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

const x = StyleX.create({
  centerChild: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  main: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "start",
  },
  container: {
    width: "90%",
    padding: "40px",
  },
});

export default page;
