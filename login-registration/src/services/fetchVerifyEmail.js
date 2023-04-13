import axios from "axios";

const fetchVerifyEmail = (url) => {
  return axios.get(url);
};

export default fetchVerifyEmail;
