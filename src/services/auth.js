export default (api) => ({
  login: async ({ email, password }) => {
    const response = await api.post('/auth/login', { email, password });

    let errors = null;
    if (!response.data) {
      errors = {
        status: response.reequest.errors,
        message: response.request.statustext,
      };
    }

    return {
      data: response.data,
      errors,
    };
  },
});
