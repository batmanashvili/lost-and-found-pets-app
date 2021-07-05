import AsyncStorage from "@react-native-async-storage/async-storage";

const SIGNIN = "SIGNIN";
const SIGNUP = "SIGNUP";

const signIn = (email, password) => {
  console.log(email, password, "signIn action begins");
  return async (dispatch) => {
    try {
      const response = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBVlyGivxYS7gzopE_A3elUmVBszQUWmvk
    `,
        {
          method: "POST",
          header: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
            returnSecureToken: true,
          }),
        }
      );

      if (!response.ok) {
        const resData = await response.json();
        const errorMessage = resData.error.message;
        let message = "Something went wrong during sign in";
        if (errorMessage === "EMAIL_NOT_FOUND") {
          message = "email was not found";
        } else if (errorMessage === "INVALID_PASSWORD") {
          message = "password is incorrect";
        }
        console.log(errorMessage, "error in sign in action");
        throw new Error(message);
      }

      const resData = await response.json();

      console.log(resData, "after Sign In");

      dispatch({
        type: SIGNIN,
        payload: { userId: resData.localId, token: resData.idToken },
      });

      saveToLocalStorage(resData.token, resData.localId);
    } catch (err) {
      console.log(err);
      return false;
    }
  };
};

const signUp = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBVlyGivxYS7gzopE_A3elUmVBszQUWmvk",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: {
            email: email,
            password: password,
            returnSecureToken: true,
          },
        }
      );

      if (!response.ok) {
        const resData = await response.JSON();
        let errorMessage = resData.error.message;
        let message = "something went wrong";
        if (errorMessage === "EMAIL_EXISTS") {
          message = "The email address is already in use by another account.";
        } else if (errorMessage === "OPERATION_NOT_ALLOWED") {
          message = "Password sign-in is disabled for this project.";
        } else if (errorMessage === "TOO_MANY_ATTEMPTS_TRY_LATER") {
          message =
            "We have blocked all requests from this device due to unusual activity. Try again later.";
        }
        throw new Error(message);
      }

      const resData = await response.json();

      console.log(resData, "after signUp response");

      dispatch({
        type: SIGNUP,
        payload: { token: resData.idToken, userId: resData.localId },
      });

      saveToLocalStorage(resData.token, resData.localId);
    } catch (err) {
      console.log(err);
    }
  };
};

const saveToLocalStorage = async (token, userId) => {
  try {
    const jsonValue = JSON.stringify({ token: token, userId: userId });
    await AsyncStorage.setItem("userData", jsonValue);
  } catch (err) {
    console.log(err);
  }
};
