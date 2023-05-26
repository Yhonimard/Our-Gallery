import { useState } from "react";
import { ref, uploadBytes } from "firebase/storage";
import { Storage } from "../../Lib/Firebase";
import { v4 } from "uuid";

const AddPhoto = () => {
  const [imgUpload, setImgUpload] = useState(null);
  console.log(imgUpload);
  const uploadImg = () => {
    if (imgUpload == null) return;
    const imgRef = ref(Storage, `images/${imgUpload.name + v4()}`);
    uploadBytes(imgRef, imgUpload).then(() => {
      alert("imgupload");
    });
  };
  return (
    <>
      <input type="file" onChange={(e) => setImgUpload(e.target.files[0])} />
      <button onClick={uploadImg}>upload img</button>
    </>
  );
};

export default AddPhoto;
