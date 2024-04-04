import axios from 'axios';

export default function suppressionDesDonnees() {
  const suppression = async (id, endpoint) => {
    try {
      const url = `https://api-4.fly.dev/${endpoint}/${id}`;
      const response = await axios.delete(url);
      alert(`Suppression confirmée !`);
    } catch (error) {
      console.error(`Erreur lors de la suppression de l'entrée avec l'ID ${id}:`, error);
    }
  };

  return {
    suppression
  };
}
