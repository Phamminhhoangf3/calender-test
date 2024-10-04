import { endOfWeek, format, startOfWeek } from "date-fns";

export const formatDate = (value) => {
  if (!value) return "";
  return format(new Date(value), "yyyy-MM-dd");
};

export const generateRandomColor = () => {
  let color;
  do {
    color = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0'); // padStart đảm bảo đủ 6 ký tự
  } while (isLightColor(color));
  return color;
};

const isLightColor = (hexColor) => {
  const rgb = hexToRgb(hexColor);
  const brightness = (0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b);
  return brightness > 240;
};

const hexToRgb = (hex) => {
  const bigint = parseInt(hex.slice(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return { r, g, b };
};

export const getLastCharacter = (str, n) => {
  if (!str) return "";
  return str.substring(str.length - n);
};

export const convertDateToWeekLabel = (date) => {
  if (!date) return "";
  const startOfweekDate = startOfWeek(date, { weekStartOn: 0 });
  const endOfWeekDate = endOfWeek(date, { weekStartsOn: 0 });
  return `${format(startOfweekDate, "MMM d")} - ${format(endOfWeekDate, "MMM d, yyyy")}`;
};
