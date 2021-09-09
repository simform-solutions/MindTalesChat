import apisauce from 'apisauce';

export const apiConfig = baseURL =>
  apisauce.create({
    baseURL,
    timeout: 30000,
    headers: {
      'Cache-Control': 'no-cache',
    },
  });

export const chatApiConfig = baseURL =>
  apisauce.create({
    baseURL,
    timeout: 30000,
    headers: {
      'X-Master-Key':
        '$2b$10$/zbjBjes6GA.U/KR21Tav.mnw5VMPJmb0Xa6CnDeYh3sVe0ZO5LYO',
      'X-Bin-Meta': 'false',
    },
  });

export async function getError(response) {
  // if (response.problem === 'CLIENT_ERROR') return response.data.error;
  if (response?.problem === 'NETWORK_ERROR') {
    return 'Please check your internet connection';
  }
  if (['CONNECTION_ERROR', 'SERVER_ERROR'].includes(response?.problem)) {
    return 'Server is not available';
  }
  return 'Something went wrong';
}
