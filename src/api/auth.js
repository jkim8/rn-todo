const EMAIL = '123';
const PASSWORD = '123';

export const signIn = (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === EMAIL && password === PASSWORD) {
        resolve(email);
      } else {
        reject('The email or password is wrong.');
      }
    }, 1000);
  });
};
