import React from "react";

export interface WeatherIconProp {
  condition?: string;
  style?: string;
}

export const WeatherIcon: React.FC<WeatherIconProp> = ({ condition, style }) => {
  return (
    <div className={`w-12 ${style=== "center"? "": "absolute top-2 right-2"}`}>
      <img src={condition}></img>
    </div>
  );
};
