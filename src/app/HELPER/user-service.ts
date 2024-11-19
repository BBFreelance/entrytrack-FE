import { jwtDecode } from 'jwt-decode';

export const getErrorMessageFromAxios = (err: any) => {
  if (err.response?.data) {
    let message = err.response.data.message;
    let error = null;

    error = err.response?.data?.error;

    if (!error) {
      error = err.response?.data?.errors;
    }
    if (!error) {
      error = '';
    }
    return `${message} ${error != '' ? ',' + error : ''}`;
  } else {
    return ``;
  }
};

export const isBrowser = () => typeof window !== 'undefined' && typeof localStorage !== 'undefined';

export const getUserSession = () => {
  if (isBrowser() && localStorage.getItem('userData')) {
    const data: any = localStorage.getItem('userData');
    return JSON.parse(data);
  }
  return null; // Return null if token is not available in localStorage or in SSR.
};

// OLD
// export const checkUserSession = () => {
//   if (localStorage.getItem('user')) {
//     return true;
//   }
//   return false;
// };

export const checkUserSession = () => {
  if (!isBrowser()) {
    return false; // Return false in SSR.
  }

  const user = localStorage.getItem('user');

  if (user) {
    const { token } = JSON.parse(user);

    // Decode the token to check its expiration
    try {
      const decodedToken: any = jwtDecode(token);
      const currentTime = Date.now() / 1000;

      // Check if the token is expired
      if (decodedToken.exp < currentTime) {
        localStorage.removeItem('user');
        return false;
      }

      return true;
    } catch (error) {
      console.error('Error decoding token:', error);
      localStorage.removeItem('user');
      return false;
    }
  }

  return false;
};
