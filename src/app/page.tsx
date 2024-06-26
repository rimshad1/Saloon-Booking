import * as StyleX from "@stylexjs/stylex";

const x = StyleX.create({
  main: {
    color: "red",
    fontSize: "36px",
  },
});

export default function Home() {
  return (
    <main>
      <div {...StyleX.props(x.main)}>Hi</div>
    </main>
  );
}
