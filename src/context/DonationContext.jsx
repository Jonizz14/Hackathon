import { createContext, useContext, useState, useEffect } from 'react';

const DonationContext = createContext();

export const useDonation = () => useContext(DonationContext);

export const DonationProvider = ({ children }) => {
  const [donations, setDonations] = useState([]);

  // Load donations from localStorage on mount
  useEffect(() => {
    const storedDonations = localStorage.getItem('donations');
    if (storedDonations) {
      try {
        setDonations(JSON.parse(storedDonations));
      } catch (error) {
        console.error('Error parsing stored donations:', error);
        localStorage.removeItem('donations');
      }
    }
  }, []);

  // Save donations to localStorage whenever donations change
  useEffect(() => {
    localStorage.setItem('donations', JSON.stringify(donations));
  }, [donations]);

  const addDonation = (donation) => {
    const newDonation = { ...donation, id: Date.now(), date: new Date().toISOString() };
    setDonations(prev => [...prev, newDonation]);
  };

  const clearDonations = () => {
    setDonations([]);
  };

  const getTotalDonated = () => {
    return donations.reduce((total, donation) => total + donation.amount, 0);
  };

  return (
    <DonationContext.Provider value={{
      donations,
      addDonation,
      clearDonations,
      getTotalDonated
    }}>
      {children}
    </DonationContext.Provider>
  );
};