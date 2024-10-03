import { format } from "date-fns";

export const formatDate = (value) => {
  if (!value) return "";
  return format(new Date(value), "yyyy-MM-dd");
};

export const generateRandomColor = () =>
  "#" + Math.floor(Math.random() * 16777215).toString(16);

export const getLastCharacter = (str, n) => {
  if (!str) return "";
  return str.substring(str.length - n);
};
