import React from "react";

// 이미지 로더 함수
const importAll = (r) => {
  let images = {};
  r.keys().map((item) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
};

// 이미지들을 불러오는 로직
const images = importAll(
  require.context("./assets", false, /\.(png|jpe?g|svg)$/)
);

const ImageCollection = ({ imgName }) => {
  const imageSrc = images[imgName]; // imgName으로 이미지 파일명에 접근

  if (!imageSrc) {
    return <p>Image not found</p>; // 이미지가 없을 경우 처리
  }

  return <img src={imageSrc} alt={imgName} />;
};

export default ImageCollection;
