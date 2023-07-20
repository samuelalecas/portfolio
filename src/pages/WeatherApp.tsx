import { useContext, useState } from "react";
import { WeatherIcon } from "../components/atoms/weatherIcon/WeatherIcon.components";
import WeatherCard from "../components/atoms/weatherWindow/WeatherCard.component";
import { SearchBar } from "../components/atoms/searchBar/SearchBar.components";
import { useFetch } from "../hooks/useFetch.hook";
import { Header } from "../components/moleculi/Header.component";
import { AppContext } from "../contexts/App.context";
import { Footer } from "../components/moleculi/Footer.component";

// Generated by https://quicktype.io

export interface Weather {
  location: Location;
  current: Current;
  forecast: Forecast;
}

export interface Current {
  last_updated_epoch: number;
  last_updated: string;
  temp_c: number;
  temp_f: number;
  is_day: number;
  condition: Condition;
  wind_mph: number;
  wind_kph: number;
  wind_degree: number;
  wind_dir: WindDir;
  pressure_mb: number;
  pressure_in: number;
  precip_mm: number;
  precip_in: number;
  humidity: number;
  cloud: number;
  feelslike_c: number;
  feelslike_f: number;
  vis_km: number;
  vis_miles: number;
  uv: number;
  gust_mph: number;
  gust_kph: number;
}

export interface Condition {
  text: Text;
  icon: Icon;
  code: number;
}

export enum Icon {
  CDNWeatherapiCOMWeather64X64Day113PNG = "//cdn.weatherapi.com/weather/64x64/day/113.png",
  CDNWeatherapiCOMWeather64X64Night113PNG = "//cdn.weatherapi.com/weather/64x64/night/113.png",
}

export enum Text {
  Clear = "Clear",
  Sunny = "Sunny",
}

export enum WindDir {
  Nw = "NW",
  W = "W",
  Wnw = "WNW",
}

export interface Forecast {
  forecastday: Forecastday[];
}

export interface Forecastday {
  date: string;
  date_epoch: number;
  day: Day;
  astro: Astro;
  hour: Hour[];
}

export interface Astro {
  sunrise: string;
  sunset: string;
  moonrise: string;
  moonset: string;
  moon_phase: string;
  moon_illumination: string;
  is_moon_up: number;
  is_sun_up: number;
}

export interface Day {
  maxtemp_c: number;
  maxtemp_f: number;
  mintemp_c: number;
  mintemp_f: number;
  avgtemp_c: number;
  avgtemp_f: number;
  maxwind_mph: number;
  maxwind_kph: number;
  totalprecip_mm: number;
  totalprecip_in: number;
  totalsnow_cm: number;
  avgvis_km: number;
  avgvis_miles: number;
  avghumidity: number;
  daily_will_it_rain: number;
  daily_chance_of_rain: number;
  daily_will_it_snow: number;
  daily_chance_of_snow: number;
  condition: Condition;
  uv: number;
}

export interface Hour {
  time_epoch: number;
  time: string;
  temp_c: number;
  temp_f: number;
  is_day: number;
  condition: Condition;
  wind_mph: number;
  wind_kph: number;
  wind_degree: number;
  wind_dir: WindDir;
  pressure_mb: number;
  pressure_in: number;
  precip_mm: number;
  precip_in: number;
  humidity: number;
  cloud: number;
  feelslike_c: number;
  feelslike_f: number;
  windchill_c: number;
  windchill_f: number;
  heatindex_c: number;
  heatindex_f: number;
  dewpoint_c: number;
  dewpoint_f: number;
  will_it_rain: number;
  chance_of_rain: number;
  will_it_snow: number;
  chance_of_snow: number;
  vis_km: number;
  vis_miles: number;
  gust_mph: number;
  gust_kph: number;
  uv: number;
}

export interface Location {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  tz_id: string;
  localtime_epoch: number;
  localtime: string;
}

const WeatherApp = () => {
  const { user } = useContext(AppContext);

  // const [apiData, setaApiData] = useState<Weather | null>(null);
  const [location, setLocation] = useState<string>("Cáceres");

  const { data, fetchData } = useFetch<Weather>({
    url: `https://api.weatherapi.com/v1/forecast.json?key=42da7e4d019546aaa4d82110231307&q=${location}&days=5&aqi=no&alerts=no&lang=es`,
  });

  return (
    <>
      <Header />
      <main
        className={`flex flex-col w-full h-full justify-center items-center bg-gray-900 overflow-x-hidden`}
      >
        {/* Título con nombre de usuario */}
        <section className="w-full lg:w-[1300px] h-full lg:h-screen flex flex-col items-center mt-32 px-6 md:px-0">
          <h1 className="text-2xl text-white mb-4">
            Hola, {user ? user.name : ""}
          </h1>

          {/* Tarjeta principal */}
          <article className="w-full md:w-72 bg-gray-700 text-white rounded-md p-8 text-center relative pt-12 mb-14">
            <WeatherIcon condition={data?.current.condition.icon} />
            <p className="text-2xl font-light">{data?.location.name}</p>
            <p className="text-sm mb-2">{data?.location.country}</p>
            <p className="text-7xl font-thin mb-3">
              {data?.current.temp_c.toFixed(0)}
              <span className="text-2xl absolute">º</span>
            </p>
            <p className="text-sm mb-2">{data?.current.condition.text}</p>
            <div className="text-sm flex gap-2 justify-center mb-4">
              <p>
                Min: {data?.forecast.forecastday[0].day.mintemp_c.toFixed(0)}º
              </p>
              <p>
                Max: {data?.forecast.forecastday[0].day.maxtemp_c.toFixed(0)}º
              </p>
            </div>
            <div>
              <SearchBar
                location={location}
                onSubmit={fetchData}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
          </article>

          <h2 className="text-xl text-white mb-6">
            Previsión de 5 días de {data?.location.name}
          </h2>

          {/* Sección con 5 tarjetas de previsión */}
          <section className="flex flex-col lg:flex-row w-full lg:w-2/3 gap-4 mb-20">
            {data?.forecast.forecastday.map((day) => (
              <WeatherCard
                key={day.date}
                icon={day.day.condition.icon}
                date={day.date}
                condition={day.day.condition.text}
                minTemp={+day.day.mintemp_c}
                maxTemp={+day.day.maxtemp_c}
              />
            ))}
          </section>
        </section>
      </main>
      <Footer/>
    </>
  );
};

export default WeatherApp;
