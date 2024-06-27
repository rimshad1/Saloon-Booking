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
          <div style={{ width: "20%" }}>
            <div>Location</div>
            <select>
              <option value=''>Location</option>
            </select>
          </div>
          <div style={{ width: "20%" }}>
            <div>Location</div>
            <select>
              <option value=''>Location</option>
            </select>
          </div>
          <div style={{ width: "20%" }}>
            <div>Location</div>
            <select>
              <option value=''>Location</option>
            </select>
          </div>
          <div
            style={{
              width: "20%",
              height: "40px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background: "#1a1a1a",
              borderRadius: "100px",
            }}
          >
            <button
              style={{
                background: "transparent",
                border: "none",
                color: "#fff",
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
