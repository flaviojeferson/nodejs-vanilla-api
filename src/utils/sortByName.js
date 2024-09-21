module.exports = function sortByName(arr, order) {
  return arr.sort((a, b) => {
    if (order.toLowerCase() === "asc") {
      return a.name.localeCompare(b.name);
    } else if (order.toLowerCase() === "desc") {
      return b.name.localeCompare(a.name);
    }
  });
};
