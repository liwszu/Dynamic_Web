import React from "react";

export default function PageWrapper({ strCategory, children }) {
  if (strCategory === "Cocktail") {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "lightpink"
        }}
        className="Page Wrapper"
      >
        {children}
      </div>
    );
  } else if (strCategory === "Ordinary Drink") {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "red"
        }}
        className="PageWrapper"
      >
        {children}
      </div>
    );
  } else if (strCategory === "Rum") {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "lightgray"
        }}
        className="PageWrapper"
      >
        {children}
      </div>
    );
  } else {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "lightblue"
        }}
        className="PageWrapper"
      >
        {children}
      </div>
    );
  }
}
