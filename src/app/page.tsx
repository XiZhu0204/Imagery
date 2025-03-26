"use client";

import React from "react";
import { DisplayCarousel } from "./DisplayCarousel";
import { TopCounter } from "./TopCounter";
import { Items } from "./Items";

export default function Page() {
  const [day, setDay] = React.useState<number>(0);

  return (
    <div className="flex flex-col h-screen w-screen">
      <div className="h-16 flex-shrink-0">
        <TopCounter day={day} />
      </div>
      <div className="flex-grow">
        <DisplayCarousel items={Items} onChange={(associatedDay) => {setDay(associatedDay)}} />
      </div>
    </div>
  );
};