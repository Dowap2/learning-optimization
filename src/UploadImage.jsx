import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Palette } from "react-palette";

const ImageBox = styled.img`
  width: 500px;
  height: 500px;
`;

export function UploadImage(props) {
  const [url, setUrl] = useState("");
  const [imgUrl, setImgUrl] = useState("./img.jpg");

  const changeFile = event => {
    let reader = new FileReader();

    reader.onloadend = e => {
      const base64 = reader.result;
      if (base64) {
        setImgUrl(base64);
        setUrl(base64.toString());
      }
    };
    if (event.files[0]) {
      reader.readAsDataURL(event.files[0]);
    }
  };

  return (
    <div>
      <div>
        <ImageBox src={url} alt="img" className="imgBox" />
      </div>
      <input type="file" accept="img/*" onChange={e => changeFile(e.target)} />
      <Palette image={imgUrl.toString()}>
        {palette => (
          <div
            style={{ color: palette.vibrant }}
            onClick={e => console.log(palette)}
          >
            Hello world
          </div>
        )}
      </Palette>
    </div>
  );
}
