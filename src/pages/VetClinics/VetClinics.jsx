import { useState } from 'react';
import VetMap from '../../components/VetMap/VetMap';
import './VetClinics.css';

const clinicsData = [
  {
    id: 1,
    name: "Panda Vet Clinic",
    address: "Yunusobod 12-mavze",
    rating: 4.8,
    status: "Open",
    description: "We provide 24/7 veterinary services including vaccinations, diagnostics, and minor surgeries. Friendly staff and modern equipment."
  },
  {
    id: 2,
    name: "Happy Paws Vet",
    address: "Mirzo Ulug'bek 5",
    rating: 4.5,
    status: "Closed",
    description: "Specializing in pets’ wellness check-ups, dental care, and emergency care. Comfortable environment for your furry friends."
  },
  {
    id: 3,
    name: "Golden Tail Veterinary",
    address: "Chilonzor 18",
    rating: 4.9,
    status: "Open",
    description: "Professional care for cats and dogs, vaccination programs, and home visits available. Experienced veterinarians."
  },
  {
    id: 4,
    name: "Healthy Paws Clinic",
    address: "Yakkasaroy 7",
    rating: 4.7,
    status: "Open",
    description: "Providing routine checkups, grooming, and minor surgical procedures. Focus on preventative healthcare."
  },
  {
    id: 5,
    name: "Little Friends Vet",
    address: "Mirzo Ulug'bek 20",
    rating: 4.6,
    status: "Closed",
    description: "Family-friendly veterinary clinic, offering vaccinations, diagnostic services, and nutrition advice."
  },
  {
    id: 6,
    name: "PetCare Center",
    address: "Sergeli 12",
    rating: 4.8,
    status: "Open",
    description: "Emergency services, surgeries, and wellness check-ups. Our vets love pets as much as you do!"
  },
  {
    id: 7,
    name: "Fur & Feathers Clinic",
    address: "Yunusobod 25",
    rating: 4.5,
    status: "Closed",
    description: "Comprehensive care for cats, dogs, and exotic pets. Vaccinations and behavioral consultations available."
  },
  {
    id: 8,
    name: "Companion Vet Clinic",
    address: "Shayxontohur 9",
    rating: 4.7,
    status: "Open",
    description: "Focused on preventative care, dental health, and emergency services. Modern facility with caring staff."
  }
];

const VetClinics = () => {
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("asc"); // sort order state qo‘shildi

  const filteredClinics = clinicsData
    .filter(clinic =>
      clinic.name.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOrder === "asc") return a.name.localeCompare(b.name);
      else return b.name.localeCompare(a.name);
    });

  return (
    <div className="vet-clinics-page">
      <h1>Veterinary Clinics</h1>
      <p>Find nearby veterinary clinics on the map.</p>
      <VetMap />

      <div className="search-sort-container">
        <input
          type="text"
          placeholder="Search clinics..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />

        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="sort-select"
        >
          <option value="asc">Sort by Name: A → Z</option>
          <option value="desc">Sort by Name: Z → A</option>
        </select>
      </div>

      <div className="clinic-list">
        {filteredClinics.map(clinic => (
          <div key={clinic.id} className="clinic-card">
            <h3>{clinic.name}</h3>
            <p>{clinic.address}</p>
            <p>⭐ {clinic.rating}</p>
            <p className={clinic.status === "Open" ? "open" : "closed"}>
              {clinic.status}
            </p>
            <p className="clinic-description">{clinic.description}</p>
            <button className="details-btn">View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VetClinics;
