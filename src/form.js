import apiCall from "./fetchAPI";
import { ui } from "./UI";
import { location } from "./locationData";
import { changeStyleOnWeather } from "./styleonWeather";
import { fromValidity } from "./formValidation";

export const form = () => {
  const input = document.querySelector("input");
  const form = document.querySelector("form");
  let city;
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    city = e.target[0].value.toLowerCase().trim();
    const validation = fromValidity(city);
    if (validation) {
      const data = await apiCall(city);
      const newLocation = location(data);
      ui(newLocation);
      changeStyleOnWeather(data);
      input.value = "";
    } else {
      input.value = "";
    }
  });
};
