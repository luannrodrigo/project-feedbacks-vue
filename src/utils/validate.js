export const validateEmpytAndLength = (value) => {
  if (!value) {
    return '*This field required';
  }

  if (value.length < 3) {
    return '*This field must be at least 3 characters';
  }

  return true;
};

export const validateEmpytAndEmail = (value) => {
  if (!value) {
    return '*This field required';
  }

  const isValid = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.a-z+)?$/i.test(value);

  if (!isValid) {
    return '*This field must be a valid email';
  }

  return true;
};
