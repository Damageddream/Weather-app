
const apiCall = async (location = "warsaw") => {
    console.log('started')
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=3344d57ff3814694a7895849232004&q=${location}`
    );
    const data = await response.json();
    console.log(data)
    console.log('finshed')
    return data
  } catch (error) {
    return false
  }
  
};

export default apiCall;

