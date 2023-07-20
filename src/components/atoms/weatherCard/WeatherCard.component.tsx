import { WeatherIcon } from "../weatherIcon/WeatherIcon.components";

export interface WeatherWindowProps {
  key: string;
  icon?: string;
  name?: string;
  date?: string;
  condition?: string;
  minTemp: number;
  maxTemp: number;
}

const WeatherCard: React.FC<WeatherWindowProps> = ({
  key,
  icon,
  name,
  date,
  condition,
  minTemp,
  maxTemp,
}) => {
  return (
    <div data-id={key} className="w-full flex flex-col items-center p-0 md:p-4">
      <h2 className="text-white text-center mb-2">{date}</h2>
      <div className="w-full xl:w-40 h-36 xl:h-44 px-6 pt-4 mb-6 md:mb-0 bg-gray-700 text-white rounded-md text-center relative flex flex-col items-center">
        <WeatherIcon style="center" condition={icon} />
        <p className="text-2xl font-light">{name}</p>
        <p className="text-sm mb-2">{condition}</p>
        <div className="text-sm flex gap-2 justify-center">
          <p>Min: {minTemp.toFixed(0)}º</p>
          <p>Max: {maxTemp.toFixed(0)}º</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
