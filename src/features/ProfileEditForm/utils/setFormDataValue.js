export default function setFormDataValue(formData) {
  const formDataKey = ['firstname', 'lastname', 'username', 'email', 'description'];
  const keyValue = formDataKey
    .reduce((formDataKeyValue, key) => {
      const value = formData.get(key);

      if (value) {
        const addValue = {
          ...formDataKeyValue,
          [key]: value,
        };

        return addValue;
      }

      return formDataKeyValue;
    }, {});

  return keyValue;
}
