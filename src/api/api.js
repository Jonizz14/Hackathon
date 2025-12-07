const API_BASE_URL = 'http://localhost:3001';

export const api = {
  // Animals
  getAnimals: () => fetch(`${API_BASE_URL}/animals`).then(res => res.json()),
  getAnimal: (id) => fetch(`${API_BASE_URL}/animals/${id}`).then(res => res.json()),

  // Foster
  getFoster: () => fetch(`${API_BASE_URL}/foster`).then(res => res.json()),
  getFosterItem: (id) => fetch(`${API_BASE_URL}/foster/${id}`).then(res => res.json()),

  // Free Animals
  getFreeAnimals: () => fetch(`${API_BASE_URL}/freeAnimals`).then(res => res.json()),
  getFreeAnimal: (id) => fetch(`${API_BASE_URL}/freeAnimals/${id}`).then(res => res.json()),

  // Donations
  getDonations: () => fetch(`${API_BASE_URL}/donations`).then(res => res.json()),
  getDonation: (id) => fetch(`${API_BASE_URL}/donations/${id}`).then(res => res.json()),

  // Shelters
  getShelters: () => fetch(`${API_BASE_URL}/shelters`).then(res => res.json()),
  getShelter: (id) => fetch(`${API_BASE_URL}/shelters/${id}`).then(res => res.json()),

  // Equipments
  getEquipments: () => fetch(`${API_BASE_URL}/equipments`).then(res => res.json()),
  getEquipment: (id) => fetch(`${API_BASE_URL}/equipments/${id}`).then(res => res.json()),

  // Vet Clinics
  getVetClinics: () => fetch(`${API_BASE_URL}/vetClinics`).then(res => res.json()),
  getVetClinic: (id) => fetch(`${API_BASE_URL}/vetClinics/${id}`).then(res => res.json()),

  // Users
  getUsers: () => fetch(`${API_BASE_URL}/users`).then(res => res.json()),
  login: (username, password) =>
    fetch(`${API_BASE_URL}/users?username=${username}&password=${password}`)
      .then(res => res.json())
      .then(users => users[0] || null),
};