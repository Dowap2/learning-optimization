import React, { useState } from "react";

export function UploadImage(props) {
  const [url, setUrl] = useState("");
  const [imgFile, setImgFile] = useState(null);

  const changeFile = event => {
    let reader = new FileReader();

    console.log(event);
    reader.onloadend = e => {
      const base64 = reader.result;
      if (base64) {
        setUrl(base64.toString());
      }
    };
    if (event.target.files[0]) {
      reader.readAsDataURL(event.target.files[0]);
      setImgFile(event.target.files[0]);
      console.log(imgFile);
    }
  };
  return (
    <div>
      <div>
        <img src={url} alt="img" />
      </div>
      <input type="file" accept="img/*" onChange={e => changeFile(e)} />
    </div>
  );
}
