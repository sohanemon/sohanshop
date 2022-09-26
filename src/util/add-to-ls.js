const addToLS = (id) => {
  let loved;
  let currentStorage;
  localStorage.getItem("wishlist")
    ? (currentStorage = JSON.parse(localStorage.getItem("wishlist")))
    : (currentStorage = { loved: [] });
  if (currentStorage.loved.includes(id)) {
    currentStorage.loved.splice(currentStorage.loved.indexOf(id), 1);
    loved = false;
  } else {
    currentStorage.loved.push(id);

    loved = true;
  }
  localStorage.setItem("wishlist", JSON.stringify(currentStorage));
  return loved;
};

const getLoved = () => {
  const data = JSON.parse(localStorage.getItem("wishlist"));
  return data?.loved;
};
export { getLoved, addToLS };
