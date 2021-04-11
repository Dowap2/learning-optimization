import React, { useState } from "react";
import styled from "styled-components";
import Color from "color-thief-react";

const ImageBox = styled.img`
  width: 500px;
  height: 500px;
`;

export function UploadImage(props) {
  const [url, setUrl] = useState("");

  const changeFile = event => {
    let reader = new FileReader();

    reader.onloadend = e => {
      const base64 = reader.result;
      if (base64) {
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
      <Color src={url}>
        {({ data, loading, error }) => (
          <div>
            <div style={{ color: data }}>Text with the predominant color</div>
            <button onClick={e => console.log(data, loading, error)}></button>
          </div>
        )}
      </Color>
    </div>
  );
}
