// Utilities for Pagintion

// get customer path params to show it in the pagination fields (href)
function getCustomerPathParams(query) {
  let pathParam = '?';
  if (query.first_name && (query.first_name.toLowerCase() === 'asc' || query.first_name.toLowerCase() === 'desc')) {
    pathParam += `first_name=${query.first_name}&`;
  }
  if (query.last_name && (query.last_name.toLowerCase() === 'asc' || query.last_name.toLowerCase() === 'desc')) {
    pathParam += `last_name=${query.last_name}&`;
  }
  if (query.birth_date && (query.birth_date.toLowerCase() === 'asc' || query.birth_date.toLowerCase() === 'desc')) {
    pathParam += `birth_date=${query.birth_date}&`;
  }

  return pathParam;
};

// get href pagination fields
function getActualParam(limit, offset) {
  const finalLimit = limit;
  const finalOffset = offset;

  return `offset=${finalOffset}&limit=${finalLimit}`;
};

// get firs - href pagination fields
function getFirstParam(limit) {
  const finalLimit = limit;
  return `offset=${0}&limit=${finalLimit}`;
};

// get next - href pagination fields
function getNextParam(limit, offPlusLim) {
  const finalLimit = limit;
  return `offset=${offPlusLim}&limit=${finalLimit}`;
};

// get prev - href pagination fields
function getPrevParam(limit, offset) {
  const finalLimit = limit;
  const finalOffset = offset;

  const offMinusLim = parseInt(finalOffset) - parseInt(finalLimit);
  return `offset=${offMinusLim}&limit=${finalLimit}`;
};

// get last - href pagination fields
function getLastParam(limit, total) {
  const finalLimit = limit;
  const totalMinusLim = total - finalLimit < 0 ? 0 : total - finalLimit;
  return `offset=${totalMinusLim}&limit=${finalLimit}`;
};

export {
  getCustomerPathParams,
  getActualParam,
  getFirstParam,
  getNextParam,
  getPrevParam,
  getLastParam
};
