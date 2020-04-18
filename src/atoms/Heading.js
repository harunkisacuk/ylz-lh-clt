import React from "react";
import { Heading } from "react-bootstrap";

export default function Heading({ size = "1", text, id }) {
  const Title = `h${size}`;

  return <Title id={id}>{text}</Title>;
}
