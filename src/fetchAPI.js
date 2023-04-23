import { errorHandler } from "./errorHandling";
import loading from "./loading";

const apiCall = async (location = "warsaw") => {
    loading.startLoading()
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=3344d57ff3814694a7895849232004&q=${location}`
    );
    if(response.ok){
      const data = await response.json();
      loading.stopLoading()
      return data
    }
    else{
      errorHandler.wrongCity()
      loading.stopLoading()
    }
    
  } catch (error) {
    errorHandler.otherErrors()
    loading.stopLoading()
  }
  
};

export default apiCall;

