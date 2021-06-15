interface login {
  (userName: string, password: string): boolean;
}

let LoginUser: login;
LoginUser = (id, pw) => {
  return id === "user" && pw === "1234" ? true : false;
};

// LoginUser(1, 2); error
LoginUser("user", "1234"); //true
LoginUser("uSer", "1234"); //false
