"use client";
import React from "react";
import * as StyleX from "@stylexjs/stylex";
import Image from "next/image";
import sal1 from "../../../public/assets/sal1.jpg";
import sal2 from "../../../public/assets/sal2.jpg";
import sal3 from "../../../public/assets/sal3.jpg";
import sal4 from "../../../public/assets/sal4.jpg";
import sal5 from "../../../public/assets/sal5.jpg";
import { useRouter } from "next/navigation";

const x = StyleX.create({
  centerChild: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  main: {
    width: "100%",
    padding: "30px 0",
  },
});

const page = () => {
  const router = useRouter();

  const events = [
    {
      id: 1,
      imageUrl: sal1.src,
      title: "Saloon Rish",
      description: "Career guidance",
      location: "Matara",
    },
    {
      id: 2,
      imageUrl: sal2.src,
      title: "Skin-laundry",
      description: "Dance show",
      location: "Galle",
    },
    {
      id: 3,
      imageUrl: sal3.src,
      title: "Hair cut",
      description: "Food",
      location: "Colombo",
    },
    {
      id: 4,
      imageUrl: sal4.src,
      title: "Saloon World",
      description: "£ 100 Onwards",
      location: "Trincomalee",
    },
    {
      id: 5,
      imageUrl: sal5.src,
      title: "Saloon World",
      description: "£ 100 Onwards",
      location: "Trincomalee",
    },
  ];

  return (
    <div {...StyleX.props(x.main, x.centerChild)}>
      <div style={{ width: "90%", display: "flex" }}>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "start",
            gap: "1.3%",
          }}
        >
          {events.map((event, index) => (
            <div
              style={{
                width: "24%",
                border: "1px solid #d3d3d3",
                height: 250,
                borderRadius: "10px",
                transition: "transform 0.3s ease, 0.3s ease",
                cursor: "pointer",
              }}
              onClick={() => router.push("/saloonDetails")}
              key={index}
            >
              <div
                style={{
                  height: "60%",
                  backgroundImage: `url(${event.imageUrl})`,
                  cursor: "pointer",
                  borderTopRightRadius: "8px",
                  borderTopLeftRadius: "8px",
                }}
              ></div>
              <div
                style={{
                  height: "20%",
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                  padding: "0 10px",
                }}
              >
                {event.title}
              </div>
              <div
                style={{
                  height: "20%",
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                  padding: "0 10px",
                }}
              >
                {event.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
