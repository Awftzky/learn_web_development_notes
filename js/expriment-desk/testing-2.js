const userJeki = {
  name: "jeki",
  allowRead: true,
  allowWrite: true,
};

// const enablePermission = () => {
//   userJeki.allowRead = false;
//   userJeki.allowWrite = false;
//   return userJeki;
// };

// PURE FUNCTION
const enablePermission = (user) => {
  user.allowRead = false;
  user.allowWrite = false;
  return user;
};
