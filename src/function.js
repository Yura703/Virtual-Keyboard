export const getIndex = (shift, language) => {
  if (language === "EN") {
    if (shift) return 0;
    else return 2;
  }
  if (language === "RU") {
    if (shift) return 1;
    else return 3;
  }
};
