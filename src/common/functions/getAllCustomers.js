
const getCustomerPathParams = (query) => {
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

const calcOffsetAndLimit = args => new Promise((resolve) => {
  const {
    offset,
    limit
  } = args;

  args.offset = (offset || offset >= 0) ? offset : '0';
  args.limit = (limit || limit >= 0) ? limit : '10';

  return resolve(args);
});

const generateSearchQuery = args => new Promise((resolve) => {
  const {
    firstName,
    lastName,
    birthDate,
    offset,
    limit
  } = args;

  args.searchQuery = {
    skip: offset,
    limit,
    order: []
  };

  if (firstName && (firstName.toLowerCase() === 'asc' || firstName.toLowerCase() === 'desc')) {
    args.searchQuery.order.push(`firstName ${firstName}`);
  }
  if (lastName && (lastName.toLowerCase() === 'asc' || lastName.toLowerCase() === 'desc')) {
    args.searchQuery.order.push(`lastName ${lastName}`);
  }
  if (birthDate && (birthDate.toLowerCase() === 'asc' || birthDate.toLowerCase() === 'desc')) {
    args.searchQuery.order.push(`birthDate ${birthDate}`);
  }

  return resolve(args);
});

const countCustomers = args => new Promise((resolve, reject) => {
  const {
    customerModel,
    _countCustomers
  } = args;

  _countCustomers({ customerModel })
    .then((data) => {
      args.total = data.total;
      return resolve(args);
    })
    .catch(err => reject(err));
});

const generatePaginationUrls = args => new Promise((resolve) => {
  const {
    baseUrl,
    originalQuery,
    total,
    offset,
    limit,
    _getCustomerPathParams
  } = args;

  const commonUrl = `${baseUrl}${_getCustomerPathParams(originalQuery)}`;
  const offPlusLim = parseInt(offset, 10) + parseInt(limit, 10);
  const offMinusLim = parseInt(offset, 10) - parseInt(limit, 10);
  const totalMinusLim = (total - limit < 0) ? 0 : total - limit;

  args.response = {
    href: `${commonUrl}offset=${offset}&limit=${limit}`,
    first: `${commonUrl}offset=${0}&limit=${limit}`,
    last: `${commonUrl}offset=${totalMinusLim}&limit=${limit}`,
    next: (offPlusLim < total) ? `${commonUrl}offset=${offPlusLim}&limit=${limit}` : undefined,
    prev: ((offset > 0) && (offset < total)) ? `${commonUrl}offset=${offMinusLim}&limit=${limit}` : undefined,
    offset,
    limit
  };

  resolve(args);
});

const findCustomers = args => new Promise((resolve, reject) => {
  const {
    customerModel,
    searchQuery
  } = args;

  customerModel.find(searchQuery)
    .then((data) => {
      args.response.items = data;
      return resolve(args.response);
    })
    .catch(err => reject(err));
});

const getAllCustomers = ({
  customerModel,
  offset,
  limit,
  firstName,
  lastName,
  birthDate,
  baseUrl,
  originalQuery,
  _countCustomers
}) => {
  const args = {
    customerModel,
    offset,
    limit,
    firstName,
    lastName,
    birthDate,
    baseUrl,
    originalQuery,
    _getCustomerPathParams: getCustomerPathParams,
    _countCustomers
  };

  return calcOffsetAndLimit(args)
    .then(generateSearchQuery)
    .then(countCustomers)
    .then(generatePaginationUrls)
    .then(findCustomers);
};

module.exports = {
  getAllCustomers
};
