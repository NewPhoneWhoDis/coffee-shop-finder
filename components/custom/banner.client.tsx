"use client";
import React from "react";
import { Button } from "../ui/button";

export default function Banner() {
  const handleOnClick = () => {};

  return (
    <div className="">
      <h1 className="text-5xl">Coffee Shop Finder</h1>
      <h2 className="font-bold mt-2.5">Discover local coffee shops</h2>
      <Button className="mt-6" onClick={handleOnClick}>
        View shops nearby
      </Button>
    </div>
  );
}
