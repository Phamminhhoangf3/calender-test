export const formatDate = (value) => {
    if (!value) return "";
    const date = new Date(value);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); 
    const day = String(date.getDate()).padStart(2, "0");
  
    return `${year}-${month}-${day}`;
  };
  
export const optionsDateDropdown = [
  '',
  '1 week',
  '2 week',
  '3 week',
  '4 week',
  '5 week',
  '6 week',
  '7 week',
  '3 month',
  '6 month',
  '1 year',
]