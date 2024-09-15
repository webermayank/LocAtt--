import API_URL from "./config";

export const getLocation = async (token) => {
  try {
    const response = await fetch(`${API_URL}/location/get-location`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch location");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching location:", error);
    throw error;
  }
};
export const reverseGeocode = async (lat, lng) => {
  try {
    const response = await fetch(`${API_URL}/location/reverse-geocode`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ lat, lng }),
    });

    if (!response.ok) {
      throw new Error("Failed to reverse geocode");
    }

    return await response.json();
  } catch (error) {
    console.error("Error reverse geocoding:", error);
    throw error;
  }
};
