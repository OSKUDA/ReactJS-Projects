import axios from "axios";

const getSecureData = ({ query }) => {
  const token = query[0];
  const url = `http://localhost:8080/secure/hello`;
  return axios.get(url, {
    headers: { Authorization: `Bearer ${token.replace(/^"(.*)"$/, "$1")}` },
  });
};

export default getSecureData;
