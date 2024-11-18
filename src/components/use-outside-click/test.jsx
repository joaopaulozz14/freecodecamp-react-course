import { useState, useRef } from "react";
import useOutsideClick from ".";

export default function UseOnclickOutsideTest() {
  const [showContent, setShowContent] = useState(false);

  const ref = useRef();
  useOutsideClick(ref, () => setShowContent(false));

  return (
    <div>
      {showContent ? (
        <div
          ref={ref}
          style={{
            width: "500px",
            height: "500px",
            margin: "auto",
            background: "lightgreen",
          }}
        >
          <h1>This is a random content</h1>
          <p>
            Please click outside of this to close this. It won't close if you
            click inside of this content
          </p>
        </div>
      ) : (
        <button
          style={{ background: "grey", width: "60px" }}
          onClick={() => setShowContent(true)}
        >
          Content
        </button>
      )}
    </div>
  );
}
