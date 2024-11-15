"use client";
import React, { useState } from "react";
import * as StyleX from "@stylexjs/stylex";
import Image from "next/image";
import Event from "../../../../public/assets/Event.svg";
import { useRouter } from "next/navigation";
import plus from "../../../../public/assets/plus.svg";
import Close from "../../../../public/assets/close.svg";

const page = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();

  const onPageChange = (newPage: number) => {};

  const handleItemsPerPageChange = (items: number) => {
    setCurrentPage(1);
  };

  return (
    <>
      <div {...StyleX.props(x.main)}>
        <div
          style={{
            width: "95%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "40px 0 0 0",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 10,
            }}
          >
            <>
              <Image src={Event} alt="Event" />
              <h3>My Sloon</h3>
            </>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <button
              style={{
                padding: "10px 20px",
                backgroundColor: "#4CAF50",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "16px",
                fontWeight: "bold",
                transition: "background-color 0.3s ease",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor = "#45A049")
              } // Slightly darker on hover
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor = "#4CAF50")
              }
              onClick={() => router.push("/dashboard/saloon/editSaloon")}
            >
              Add Saloon
            </button>
          </div>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            padding: "0 40px",
          }}
        >
          <div
            style={{
              width: 400,
              height: 400,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#f3f3f3",
              borderRadius: 10,
            }}
            onClick={() => router.push("/dashboard/saloon/editSaloon")}
          >
            <div
              style={{
                width: "100%",
                height: "60%",
                justifyContent: "center",
                alignItems: "center",
                borderTopRightRadius: 10,
                borderTopLeftRadius: 10,
                display: "flex",
              }}
            >
              Saloon Image
            </div>
            <div
              style={{
                width: "100%",
                height: "40%",
                justifyContent: "space-around",
                alignItems: "center",
                borderBottomRightRadius: 10,
                borderBottomLeftRadius: 10,
                display: "flex",
                flexDirection: "column",
                padding: "0 10px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <div>Venue</div>
                <div>Price: LKR 500</div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  width: "100%",
                  flexDirection: "column",
                }}
              >
                <h4>Description</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolore, illo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const x = StyleX.create({
  centerChild: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  main: {
    width: "100%",
    height: "100%",
    flexDirection: "column",
    gap: 20,
    justifyContent: "start",
    display: "flex",
    alignItems: "center",
  },
  tableContainer: {
    marginTop: 10,
    width: "100%",
    borderCollapse: "collapse",
  },
  tableHead: {
    height: 50,
    fontWeight: 600,
    backgroundColor: "#fff",
    boxShadow: " 0 0 5px 0 #00000025",
    borderBottom: "1px solid #999",
  },
  thItem: {
    padding: "10px",
    fontSize: 14,
    textAlign: "left",
  },
  tableData: {
    padding: "10px",
    fontSize: 14,
    textAlign: "left",
  },
  tableRow: {
    backgroundColor: "#fff",
    borderBottom: "1px solid #d9d9d9",
  },
  tableRowAlt: {
    backgroundColor: "#F5C100",
    borderBottom: "1px solid #d9d9d9",
  },
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 2,
    background: {
      default: "transparent",
      ":hover": "#000",
    },
    color: {
      default: "#000",
      ":hover": "#fff",
    },
    padding: "10px 20px",
    border: "2px solid #000435",
    outline: "none",
    cursor: "pointer",
    borderRadius: 8,
    fontWeight: 700,
    transition: "color 0.3s ease",
  },
  buttonDisabled: {
    backgroundColor: "#fff",
    color: "#999999",
    cursor: "not-allowed",
  },
  viewButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 2,
    background: {
      default: "#fff",
      ":hover": "#000",
    },
    color: {
      default: "#000",
      // ":hover": "#fff",
    },
    padding: "5px 10px",
    border: "1px solid #00000025",
    outline: "none",
    cursor: "pointer",
    borderRadius: 8,
    fontWeight: 700,
    transition: "color 0.3s ease",
  },
  viewButtonAlt: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 2,
    background: {
      default: "#fff",
      ":hover": "#000",
    },
    color: {
      default: "#000",
      ":hover": "#fff",
    },
    padding: "5px 10px",
    border: "1px solid #00000025",
    outline: "none",
    cursor: "pointer",
    borderRadius: 8,
    fontWeight: 700,
  },
  image: {
    transition: "filter 0.3s ease",
  },
});

export default page;
