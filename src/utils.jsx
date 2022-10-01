const BASE_URL = "http://localhost:3000/";
const imageUrl = `${BASE_URL}/data/`;
const statusUrl = `${BASE_URL}/statusIcons/`;

export const getImageUrl = (data) => {
  return imageUrl + data.dir + "/" + data.imageName;
};

export const getStausUrl = (data) => {
  return statusUrl + data.statusIcon;
};
