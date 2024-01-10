import camelcaseKeys from 'camelcase-keys';

const getFormattedCamelCaseData = (data) => {
  const formattedData = camelcaseKeys(data, { deep: true });
  return formattedData;
};

export default getFormattedCamelCaseData;
