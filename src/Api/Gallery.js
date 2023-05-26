import { collection, getDocs } from "firebase/firestore";
import { db } from "../Lib/Firebase";

const photosRef = collection(db, "our_photos");
const getPhoto = async () => {
  const data = await getDocs(photosRef);
  return data;
};

const exportObject = {
  getPhoto,
};
export default exportObject;
