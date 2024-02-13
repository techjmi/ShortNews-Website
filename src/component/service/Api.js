
import axios from "axios";

const GetNews = async (props) => {
  try {
    const URL = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=8fc50522d62b4706a954c30eb629fb29`;
    let response = await axios.get(URL);

    if (response.status === 200) {
      const data = response.data; // Access the response data directly
      console.log("the res is", data);
      return data;
    } else {
      console.log("Request failed with status:", response.status);
      // Handle other response statuses as needed
    }
  } catch (error) {
    console.log("The Error is ", error.message);
  }
};

export default GetNews;
