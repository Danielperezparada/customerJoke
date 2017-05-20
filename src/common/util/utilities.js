
// Function to get the search query well formed with all the parameters
function getOrderAndPag(first_name, last_name, birth_date, offset, limit){
  const query = {
    skip:offset,
    limit:limit,
    order: []
  };

  if (first_name && (first_name.toLowerCase() === 'asc' || first_name.toLowerCase() === 'desc')) {
      query.order.push(`first_name ${first_name}`);
  }
  if(last_name && (last_name.toLowerCase() === 'asc' || last_name.toLowerCase() === 'desc')) {
      query.order.push(`last_name ${last_name}`);
  }
  if(birth_date && (birth_date.toLowerCase() === 'asc' || birth_date.toLowerCase() === 'desc')) {
      query.order.push(`birth_date ${birth_date}`);
  }

  return query;
}

// function to create custom error
function createCustomError(statusCode, name, msg) {
  const error = {
    message: msg,
    statusCode:statusCode,
    name: name
  };

  return error;
};

// function to get the current age from the birth date
function getAge(birth_date) {
    var ageDate = new Date(Date.now() - new Date(birth_date).getTime());
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

export {
  createCustomError,
  getOrderAndPag,
  getAge
};
