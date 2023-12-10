// ApiService.js
const ApiService = {
  async getTicketData() {
    try {
      const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
      if (!response.ok) {
        throw new Error('Failed to fetch ticket data');
      }
      const data = await response.json();
      return data.tickets;
    } catch (error) {
      console.error('Error fetching ticket data:', error);
      return [];
    }
  },
  async getUsersData() {
    try {
      const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
      if (!response.ok) {
        throw new Error('Failed to fetch users data');
      }
      const data = await response.json();
      return data.users;
    } catch (error) {
      console.error('Error fetching users data:', error);
      return [];
    }
  },
};

export default ApiService;
