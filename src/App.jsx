import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import { DonationProvider } from "./context/DonationContext";
import Layout from "./shared/Layout";
import Home from "./pages/Home/Home";
import Animals from "./pages/Animals/Animals";
import Foster from "./pages/Foster/Foster";
import FreeGive from "./pages/FreeGive/FreeGive";
import Donations from "./pages/Donations/Donations";
import VetClinics from "./pages/VetClinics/VetClinics";
import Equipments from "./pages/Equipments/Equipments";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import Cart from "./pages/Cart/Cart";
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <DonationProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="animals" element={<Animals />} />
                <Route path="foster" element={<Foster />} />
                <Route path="free-give" element={<FreeGive />} />
                <Route path="donations" element={<Donations />} />
                <Route path="vet-clinics" element={<VetClinics />} />
                <Route path="equipments" element={<Equipments />} />
                <Route path="cart" element={<Cart />} />
                <Route path="login" element={<Login />} />
                <Route path="profile" element={<Profile />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </DonationProvider>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
