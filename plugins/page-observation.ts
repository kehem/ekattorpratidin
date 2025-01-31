export default defineNuxtPlugin(() => {
  // Define the function for making GET requests
  const useGetRequest = async <T>(url: string) => {
    try {
      const { data, error } = await useFetch<T>(url); // ✅ No need for 'method: GET'

      if (error.value) {
        console.error('GET request error:', error.value);
        return { data: null, error: error.value };
      }

      return { data: data.value, error: null };
    } catch (err) {
      console.error('Unexpected error in GET request:', err);
      return { data: null, error: err };
    }
  };

  // Provide the function globally
  return {
    provide: {
      getAPI: useGetRequest
    }
  };
});
