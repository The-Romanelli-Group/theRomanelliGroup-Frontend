import Axios from "axios";
const apiServices = {
  getBaseUrl(apiType) {
    switch (apiType) {
      case "authentication":
        return process.env.REACT_APP_FEATURE_LISTINGS;
      default:
        return "";
    }
  },
  async request(
    apiType,
    method,
    endPoint,
    headers,
    params = null,
    data = null
  ) {
    try {
      const baseUrl = this.getBaseUrl(apiType);

      const response = await Axios({
        method,
        url: `${baseUrl}${endPoint}`,
        headers,
        params,
        data,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  post(apiType, endPoint, headers, params, data) {
    return this.request(apiType, "POST", endPoint, headers, params, data);
  },
  get(apiType, endPoint, headers, params) {
    return this.request(apiType, "GET", endPoint, headers, params);
  },
  put(apiType, endPoint, headers, params, data) {
    return this.request(apiType, "PUT", endPoint, headers, params, data);
  },
  patch(apiType, endPoint, headers, params, data) {
    return this.request(apiType, "PATCH", endPoint, headers, params, data);
  },
  delete(apiType, endPoint, headers, params, data) {
    return this.request(apiType, "DELETE", endPoint, headers, params, data);
  },

  async getImage(url, token) {
    try {
      const response = await Axios(url, {
        responseType: "blob",
        headers: { Authorization: "Bearer " + token },
      });
      if (response) {
        return response;
      }
    } catch (error) {
      console.error("error is coming", error);
    }
  },
};
export default apiServices;
