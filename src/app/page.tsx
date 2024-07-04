import * as StyleX from "@stylexjs/stylex";
import Saloon from "./saloon/page";

const x = StyleX.create({
  centerChild: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  main: {
    width: "100%",
  },
  filterDiv2: {
    width: {
      default: "25%",
      "@media (max-width: 768px)": "100%",
    },
    display: "flex",
    flexDirection: "column",
    gap: 20,
    padding: "0px 10px",
    flexWrap: "wrap",
  },
  filterP: {
    display: "flex",
    fontSize: {
      default: 18,
      "@media (max-width: 768px)": 14,
    },
  },
  filterContent: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    gap: 10,
    flexDirection: {
      default: "row",
      "@media (max-width: 768px)": "column",
    },
    fontSize: {
      default: 16,
      "@media (max-width: 768px)": "12px",
      "@media (min-width: 1920px)": 36,
    },
  },
  filterInput: {
    outline: "none",
    background: "transparent",
    border: "none",
    fontSize: {
      default: 18,
      "@media (max-width: 768px)": 14,
    },
    color: "#6C6C6C",
  },
});

export default function Home() {
  return (
    <main {...StyleX.props(x.main, x.centerChild)}>
      <div
        style={{
          width: "90%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div style={{ padding: "60px 0" }}>
          <h1>Book local beauty and wellness services</h1>
        </div>
        <div
          style={{
            width: "100%",
            background: "#fff",
            border: "5px solid #d3d3d340",
            height: 60,
            borderRadius: "100px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "60px 0",
          }}
        >
          <div {...StyleX.props(x.filterDiv2)}>
            <select {...StyleX.props(x.filterInput)}>
              <option value=''>Category</option>
              <option>Name</option>
            </select>
          </div>
          <div
            style={{
              content: "",
              width: 2,
              height: 50,
              backgroundColor: "#99999925",
            }}
          ></div>
          <div {...StyleX.props(x.filterDiv2)}>
            <select {...StyleX.props(x.filterInput)}>
              <option value=''>Category</option>
              <option>Name</option>
            </select>
          </div>
          <div
            style={{
              content: "",
              width: 2,
              height: 50,
              backgroundColor: "#99999925",
            }}
          ></div>
          <div {...StyleX.props(x.filterDiv2)}>
            <select {...StyleX.props(x.filterInput)}>
              <option value=''>Category</option>
              <option>Name</option>
            </select>
          </div>
          <div
            style={{
              content: "",
              width: 2,
              height: 50,
              backgroundColor: "#99999925",
            }}
          ></div>
          <div
            style={{
              width: "25%",
              display: "flex",
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <button
              style={{
                border: "none",
                color: "#fff",
                width: "90%",
                background: "#1a1a1a",
                borderRadius: "100px",
                padding: "0 10px",
                height: "80%",
                fontWeight: 500,
                fontSize: 24,
              }}
            >
              Search
            </button>
          </div>
        </div>
            <Saloon />
      </div>
    </main>
  );
}
