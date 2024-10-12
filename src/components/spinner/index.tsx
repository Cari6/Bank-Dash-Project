"use client";
import React from "react";
import { Wave, WaveRect } from "./styles";

const Spinner = () => {
  return (
    <Wave className="sk-wave">
      <WaveRect className="sk-wave-rect"></WaveRect>
      <WaveRect className="sk-wave-rect"></WaveRect>
      <WaveRect className="sk-wave-rect"></WaveRect>
      <WaveRect className="sk-wave-rect"></WaveRect>
      <WaveRect className="sk-wave-rect"></WaveRect>
    </Wave>
  );
};

export default Spinner;
