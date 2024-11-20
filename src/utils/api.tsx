import axios from 'axios'; ;

interface Post {
  id: number;
  title: string;
  body: string;
}

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 5000, 
});

export const fetchData = async ( url: string): Promise<Post | any> => {
  try {
    const response = await api.get(`https://jsonplaceholder.typicode.com${url}`);
    return response.data; 
  } catch (error: any) {
    console.error('Error fetching data:', error.message); 
    return null; 
  }
};

