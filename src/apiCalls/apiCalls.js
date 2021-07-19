import axios from "axios";

const api = axios.create({
  baseURL: "http://ec2-54-245-154-118.us-west-2.compute.amazonaws.com:8080",
});

export const fetchPlaces = async (data) => {
  try {
    const res = await api.get(`/api/location/fetch-places?keyword=${data}`);

    return new Promise((resolve, reject) => {
      return resolve(res.data);
    });
  } catch (err) {
    console.log(err);
    return new Promise((resolve, reject) => {
      return resolve("Some error Occoured");
    });
  }
};

export const fetchReference = async (data) => {
  try {
    const res = await api.get(
      `/api/location/fetch-coordinates?place-reference=${data}`
    );

    return new Promise((resolve, reject) => {
      return resolve(res.data);
    });
  } catch (err) {
    console.log(err);
    return new Promise((resolve, reject) => {
      return resolve("Some error Occoured");
    });
  }
};
export const fetchHotels = async (data) => {
  try {
    const res = await api.get(`/api/hotel/search-hotels?reference=${data}`);
    console.log(data);
    return new Promise((resolve, reject) => {
      return resolve(res.data);
    });
  } catch (err) {
    console.log(err);
    return new Promise((resolve, reject) => {
      return resolve("Some error Occoured");
    });
  }
};
