export const ApiConstants = {
    USER: {
      SIGN_UP: "/users/signUp",
      FIND_ALL: "/users",
      DELETE: (userId) => {
        return "/user/" + userId;
      },
      LOGIN: "/users/login",
    },
    // LOGIN: "/auth/login",
    
  };