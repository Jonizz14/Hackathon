import { createContext, useContext, useState } from 'react';

const DonationContext = createContext();

export const useDonation = () => useContext(DonationContext);

export const DonationProvider = ({ children }) => {
  const [donations, setDonations] = useState([]);

  const addDonation = (donation) => {
    setDonations(prev => [...prev, { ...donation, id: Date.now(), date: new Date().toISOString() }]);
  };

  return (
    <DonationContext.Provider value={{ donations, addDonation }}>
      {children}
    </DonationContext.Provider>
  );
};