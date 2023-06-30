import React from "react";
import Card from "../components/Card";

export default function HomePage() {
  return (
    <>
      <div className="max-w-screen-xl flex flex-wrap mx-auto p-4 justify-between h-screen">
        <h1 className="text-7xl">Welcome</h1>
      </div>
      <div className="max-w-screen-xl flex flex-wrap mx-auto justify-between">
        <h2 className="text-3xl">Events</h2>
        <div className="max-w-screen-xl flex flex-wrap mx-auto p-4 justify-between">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
}
