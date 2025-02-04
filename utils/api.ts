'use client';

export const fetchHelloWorld = async (): Promise<void> => {
  try {
    const response = await fetch('/api/hello');
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    console.log(data.message);
    alert(data.message);
    return data;
  } catch (error) {
    console.error('Error fetching the API:', error);
    alert('Error fetching the API. Check the console for details.');
    throw error;
  }
};
