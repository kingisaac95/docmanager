export default (limit, offset, count) => {
  const result = {};
  limit = limit > count ? count : limit;
  offset = offset > count ? count : offset;
  result.totalCount = count;
  result.currentPage = Math.floor(offset / limit) + 1;
  result.pageCount = Math.ceil(count / limit);
  result.pageSize = Number(limit);
  if (result.currentPage === result.pageCount && offset !== 0) {
    result.pageSize = result.totalCount % offset === 0 ?
      result.totalCount - offset : result.totalCount % offset;
    result.pageSize = Number(result.pageSize);
  }
  return result;
};