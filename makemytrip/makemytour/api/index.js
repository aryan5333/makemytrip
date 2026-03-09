import axios from 'axios'

const BACKEND_URL = "http://localhost:8080";

export const login = async (email, password) => {
  const res = await axios.post(`${BACKEND_URL}/user/login`, {
    email,
    password
  });
  return res.data;
};

export const Signup = async (firstname, lastname, email, phoneNumber, password) => {
  const res = await axios.post(`${BACKEND_URL}/user/signup`, {
    firstname, lastname, email, phoneNumber, password
  });
  return res.data;
};

export const refreshUser = async (email) => {
  const res = await axios.get(`${BACKEND_URL}/user/${email}`, {
    params: { email }
  });
  return res.data;
};

export const getflight = async () => {
  try {
    const res = await axios.get(`${BACKEND_URL}/flight`)
    const data = res.data
    return data

  } catch (error) {
    console.log(data);
  }
};
export const addflight = async (
  flightName,
  from,
  to,
  departureTime,
  arrivalTime,
  price,
  availableSeats
) => {
  try {
    const res = await axios.post(`${BACKEND_URL}/admin/flight`, {
      flightName,
      from,
      to,
      departureTime,
      arrivalTime,
      price,
      availableSeats,
    });
    return res.data;
  } catch (error) {
    console.log("Add flight error:", error);
    throw error;
  }
};
export const editflight = async (
  id,
  flightName,
  from,
  to,
  departureTime,
  arrivalTime,
  price,
  availableSeats
) => {
  try {
    const res = await axios.put(`${BACKEND_URL}/admin/flight/${id}`, {
      flightName,
      from,
      to,
      departureTime,
      arrivalTime,
      price,
      availableSeats,
    });
    return res.data;
  } catch (error) {
    console.log("Add flight error:", error);
    throw error;
  }
};
export const getuserbyemail = async (email) => {
  try {
    const res = await axios.get(`${BACKEND_URL}/user/email?email=${email}`);
    const data = res.data;
    return data;
  } catch (error) {
    throw error;
  }
};
export const editprofile = async (id, firstname, lastname, email, phoneNumber) => {
  try {
    const res = await axios.post(`${BACKEND_URL}/user/edit?id=${id}`, {
      firstname, lastname, email, phoneNumber
    });
    const data = res.data;
    return data;

  } catch (error) {

  }
}
export const gethotel = async () => {
  try {
    const res = await axios.get(`${BACKEND_URL}/hotel`)
    const data = res.data
    return data

  } catch (error) {
    console.log("Get hotel error:", error);
    throw error;
  }
};
export const addhotel = async (
  hotelName,
  location,
  pricePerNight,
  availableRooms,
  amenities,

) => {
  try {
    const res = await axios.post(`${BACKEND_URL}/admin/hotel`, {
      hotelName,
      location,
      pricePerNight,
      availableRooms,
      amenities,
    });
    return res.data;
  } catch (error) {
    console.log("Add hotel error:", error);
    throw error;
  }
};
export const edithotel = async (
  id,
  hotelName,
  location,
  pricePerNight,
  availableRooms,
  amenities,

) => {
  try {
    const res = await axios.put(`${BACKEND_URL}/admin/hotel/${id}`, {
      hotelName,
      location,
      pricePerNight,
      availableRooms,
      amenities,
    });
    return res.data;
  } catch (error) {
    console.log("Edit hotel error:", error);
    throw error;
  }
};
export const handleflightbooking = async (UserRoundIcon, flightId, setAbortedLogsStyle, price) => {
  try {
    const url = `${BACKEND_URL}/booking/flight?userId=${userId}&flightId=${flightId}&seats=${seats}&price=${price}`
    const res = await axios.post(url);
    const data = res.data;
    return data
  }
  catch (error) {
    console.log(error);
  }
};
export const handlehotelbooking = async (userId, hotelId, rooms, price) => {
  try {
    const url = `${BACKEND_URL}/booking/hotel?userId=${userId}&hotelId=${hotelId}&rooms=${rooms}&price=${price}`
    const res = await axios.post(url);
    const data = res.data;
    return data
  } catch (error) {
    console.log(error);
  }
}
