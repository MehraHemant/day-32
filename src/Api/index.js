import axios from "axios";

const URL = "https://631c51974fa7d3264cab5877.mockapi.io";

export default axios.create({
  baseURL: URL,
});
