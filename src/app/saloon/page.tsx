import React from "react";
import * as StyleX from "@stylexjs/stylex";
import Image from "next/image";
import sal1 from "../../../public/assets/sal1.jpg";
import sal2 from "../../../public/assets/sal2.jpg";
import sal3 from "../../../public/assets/sal3.jpg";
import sal4 from "../../../public/assets/sal4.jpg";
import sal5 from "../../../public/assets/sal5.jpg";

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
  const events = [
    {
      id: 1,
      imageUrl: sal1.src,
      title: "Choose your career",
      description: "Career guidance",
    },
    {
      id: 2,
      imageUrl: sal2.src,
      title: "Rhythm of London",
      description: "Dance show",
    },
    {
      id: 3,
      imageUrl: sal3.src,
      title: "Kalyana samayal saatham",
      description: "Food",
    },
    {
      id: 4,
      imageUrl: sal4.src,
      title: "Science World",
      description: "£ 100 Onwards",
    },
    {
      id: 5,
      imageUrl: sal5.src,
      title: "Moonkil Kaatre",
      description: "Music",
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
            justifyContent: "center",
            gap: "1.3%",
          }}
        >
          {events.map((event, index) => (
            <div
              style={{ width: "24%", border: "1px solid #d3d3d3", height: 200 }}
              key={index}
            >
              <div
                style={{
                  height: "60%",
                  backgroundImage: `url(${event.imageUrl})`,
                  cursor: "pointer",
                }}
              ></div>
              <div
                style={{
                  height: "20%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {event.title}
              </div>
              <div
                style={{
                  height: "20%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
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
