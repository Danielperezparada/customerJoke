
const findOneCustomer = args => new Promise((resolve, reject) => {
  const {
    customerModel,
    searchId
  } = args;

  customerModel.findOne({ where: { id: searchId } })
    .then((data) => {
      if (!data) {
        return reject({ statusCode: 404, name: 'Not Found', message: `could not find a model with id ${searchId}` }); // eslint-disable-line prefer-promise-reject-errors
      }
      args.response = data;
      return resolve(args);
    })
    .catch(err => reject(err));
});

const calculateAge = args => new Promise((resolve) => {
  const {
    birthDate
  } = args.response;

  const ageDate = new Date(Date.now() - new Date(birthDate).getTime());
  args.response.age = Math.abs(ageDate.getUTCFullYear() - 1970);

  return resolve(args);
});

const getRandomJoke = args => new Promise((resolve, reject) => {
  const { icndbJoke } = args;
  const {
    firstName,
    lastName
  } = args.response;

  icndbJoke.getRandomJoke(firstName, lastName)
    .then((data) => {
      args.response.joke = data.value.joke;
      return resolve(args.response);
    })
    .catch(err => reject(err));
});


const getCustomerById = ({
  customerModel,
  icndbJoke,
  searchId
}) => {
  const args = {
    customerModel,
    icndbJoke,
    searchId
  };

  return findOneCustomer(args)
    .then(calculateAge)
    .then(getRandomJoke);
};


module.exports = {
  getCustomerById
};
