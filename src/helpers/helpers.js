import qs from 'qs';

const getPageFromLocation = location =>
  qs.parse(location.search, { ignoreQueryPrefix: true }).page;

const isPageEligible = (queryPage, pagesArr) =>
  queryPage &&
  Number.isInteger(queryPage) &&
  queryPage > 0 &&
  queryPage <= pagesArr.length;

export { getPageFromLocation, isPageEligible };
