import { getLoved } from "./add-to-ls";

const removeFromLS = (id) => {
  let loved = getLoved();
  if (loved.includes(id)) {
    loved.splice(loved.indexOf(id), 1);
  }
};
export default removeFromLS;
