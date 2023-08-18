import axios from "axios";
export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer uVmUhSGy2-cbrMGpANdpGGa4tR7yA-hRd8xyt_utuz7AjUwuzLWthaOiroSKE6X9TjtJI3nZrdo4DLg3UGHAo1tUUf4sIF1gsl6C1lPm5wrtGOifbNq5-SjaPWrfZHYx",
  },
});
