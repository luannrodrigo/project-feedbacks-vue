export default (httpsClient) => ({
  getMe: async () => {
    const { data } = await httpsClient.get('/users/me');

    return {
      data,
    };
  },
});
