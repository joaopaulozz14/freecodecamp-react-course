import useResizeWindow from ".";

export default function UseResizeWindow() {
  const resize = useResizeWindow();
  const { width, height } = resize;
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Window Resize</h1>
      <p>Width: {width}</p>
      <p>Height: {height}</p>
    </div>
  );
}
