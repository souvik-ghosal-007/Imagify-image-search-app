import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID _7ZiyGNQF5sovaRGciQGnx0-lVcWl_kLnaET9ECfg-k",
    },
    params: {
      query: term,
      per_page: 30,
      order_by: "latest",
    },
  });

  return response.data.results;
};

export default searchImages;
