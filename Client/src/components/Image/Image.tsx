import React from "react";
import "./Image.css";

interface ImageContent {
  imageLink: string;
  altImage: string;
}

export default function MyImage(props: ImageContent) {
  const image = `${props.imageLink}`;

  return (
    <img
      src={image}
      className="project"
      alt={"Teste"}
    />
  );
}
