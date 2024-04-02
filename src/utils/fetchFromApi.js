export const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "2c8f61140bmshd1d8485182e2d7bp14b0b3jsn90797f9af013",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};
//this will return an object but without using axios
export async function fetchFromApi(url) {
  try {
    const response = await fetch(`${BASE_URL}/${url}`, options);
    const result = await response.text();
    const responseObject = JSON.parse(result);
    console.log("objeto JS: " + responseObject);
    return responseObject;
  } catch (error) {
    console.error(error);
  }
}
