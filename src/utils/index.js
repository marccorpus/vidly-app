import _ from "lodash";

export const paginate = (data, perPage, currentPage) => {
  const start = (currentPage - 1) * perPage;
  const end = start + perPage;

  return data.slice(start, end);
};

export const filter = (data, column, filters) => {
  return data.filter((d) => {
    const value = _.get(d, column);

    return !filters || (filters && filters.includes(value));
  });
};

export const sort = (data, column, type) => {
  return _.orderBy(data, [column], [type]);
};
