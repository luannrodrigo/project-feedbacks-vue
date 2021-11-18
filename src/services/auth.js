export default (httpClient) => ({
  register: async ({ name, email, password }) => {
    const response = await httpClient.post('/auth/register', {
      name,
      email,
      password,
    });

    let errors = null;

    if (!response.data) {
      errors = {
        status: response.reequest.errors,
        statustext: response.request.statustext,
      };
    }

    return {
      data: response.data,
      errors,
    };
  },
  login: async ({ email, password }) => {
    const response = await httpClient.post('/auth/login', {
      email,
      password,
    });

    let errors = null;
    if (!response.data) {
      errors = {
        status: response.reequest.errors,
        statustext: response.request.statustext,
      };
    }

    return {
      data: response.data,
      errors,
    };
  },
});
