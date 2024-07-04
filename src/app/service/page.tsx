import Image from "next/image";
import React from "react";
import Be from "../../../public/assets/beard.jpg";

const page = () => {
  const category = [
    {
      Name: "Shaving",
      dc: "For premium result, at our barbershop, we combine...",
      image: "",
    },
    {
      Name: "Shaving",
      dc: "For premium result, at our barbershop, we combine...",
      image: "",
    },
    {
      Name: "Shaving",
      dc: "For premium result, at our barbershop, we combine...",
      image: "",
    },
    {
      Name: "Shaving",
      dc: "For premium result, at our barbershop, we combine...",
      image: "",
    },
    {
      Name: "Shaving",
      dc: "For premium result, at our barbershop, we combine...",
      image: "",
    },
  ];

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        padding: "20px 0",
      }}
    >
      <div
        style={{
          width: "90%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "40px 0",
          gap: 20,
        }}
      >
        <div style={{ width: "50%" }}>
          <Image src={Be} alt='Beard' width={600} />
        </div>
        <div
          style={{
            width: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "start",
            flexDirection: "column",
          }}
        >
          <h2 style={{ textAlign: "start", widows: "100%" }}>
            ABOUT OUR <br /> TECHNOLOGY
          </h2>
          <div
            style={{
              width: "250px",
              height: 2,
              content: "",
              backgroundColor: "#999",
              margin: "20px 0",
            }}
          ></div>
          <p>
            Our barbershop is the territory created purely for males who
            appreciate premium quality, time and flawless look. Welcome to
            Nelson!
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          gap: "4%",
          flexWrap: "wrap",
          width: "90%",
        }}
      >
        {category.map((item, index) => (
          <div
            style={{
              width: "22%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "450px",
              padding: "0 20px",
              borderRadius: 10,
              backgroundColor: "#00000025",
              boxShadow: "0 0 0 5px #00000025",
              flexDirection: "column",
              marginBottom: 20,
            }}
            key={index}
          >
            <div>
              <Image src={""} alt='' />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                padding: "0 40px",
              }}
            >
              <h3>{item.Name}</h3>
              <p>{item.dc}</p>
            </div>
            <div>
              <p>READ MORE</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
