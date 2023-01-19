import axios from "axios";

function request() {
  const instance = axios.create({
    baseURL:
      process.env.NODE_ENV === "production" ? "/v1" : "https://httpbin.org",
  });

  instance.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      window.$notification.error({
        content: error.message,
        duration: 2500,
        keepAliveOnHover: true,
      });
      return Promise.reject(error);
    }
  );

  return instance;
}

export function reqGet200() {
  return request().get("/status/200");
}

export function reqGet404() {
  return request().get("/status/404");
}
