const timeFormatter = function (createdAt) {
  const createdYear = new Date(createdAt).getFullYear();
  const createdMonth = new Date(createdAt).getMonth() + 1;
  const createdDay = new Date(createdAt).getDate();

  return `${createdYear}. ${createdMonth}. ${createdDay}`;
};

export default timeFormatter;
