import axios from 'axios';

const API_BASE_URL = 'https://blogging-api-xi.vercel.app/blog/';

const blogApi = {
  createBlog: async (formData) => {
    try {
      console.log('Submitting form data:', formData);
      const response = await axios.post(`${API_BASE_URL}create`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('API Response:', response.data);
      return response;
    } catch (error) {
      console.error('API Error:', error.response?.data || error.message);
      throw error;
    }
  }
};

export default blogApi;  // ✅ Ensure it is exported correctly
