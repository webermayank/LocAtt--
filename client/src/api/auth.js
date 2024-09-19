import API_URL from "./config";

export const register = async (userData) => {
  try {
    const response = await fetch(`${API_URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.msg || "Registration failed");
    }

    const data = await response.json();

    // Store the token in localStorage
    if (data.token) {
      localStorage.setItem("token", data.token);
    } else {
      throw new Error("Token not received from server");
    }

    return data;
  } catch (error) {
    console.error("Registration error:", error);
    throw error;
  }
};

// Get organization location

//check the location endpoint is working or not
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

//login

export const login = async (formData) => {
  const response = await fetch(`${process.env.VITE_API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
 const errorData = await response.json(); // Get error message from response
 throw new Error(errorData.msg || "Login failed");  }

  return await response.json();
};