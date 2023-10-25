export const registerUser = async (username, email, password) => {
  try {
    const response = await fetch(`http://localhost:5001/users/register`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName: username,
        email: email,
        password: password,
      }),
    });
    console.log(response);

    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = async (username, password) => {
  try {
    const loginResponse = await fetch(`http://localhost:5001/users/login`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName: username,
        password: password,
      }),
    });
    console.log(loginResponse);
  } catch (error) {
    console.log(error);
  }
};

export const getUsers = async () => {
  try {
    const response = await fetch(`http://localhost:5001/users/`);
    const userData = await response.json();
    return userData;
  } catch (error) {
    console.log(error);
  }
};
