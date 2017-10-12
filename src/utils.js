const getRandomNum = (maxNum = 100) => {
  const num = Math.floor(Math.random() * maxNum);
  return num;
};
export default getRandomNum;
