import React, { createContext, useState } from 'react';

const DateContext = createContext();

const DateProvider = ({ children }) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const updateDate = (date) => {
    setCurrentDate(date);
  };

  return (
    <DateContext.Provider value={{ currentDate, updateDate }}>
      {children}
    </DateContext.Provider>
  );
};

export { DateContext, DateProvider };
