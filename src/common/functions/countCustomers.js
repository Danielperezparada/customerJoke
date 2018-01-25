
const getTotalCustomers = args => new Promise((resolve, reject) => {
  const {
    customerModel
  } = args;

  customerModel.count({})
    .then((total) => {
      args.total = total;
      return resolve(args);
    })
    .catch(err => reject(err));
});


const countCustomers = ({
  customerModel
}) => {
  const args = {
    customerModel
  };

  return getTotalCustomers(args);
};

module.exports = {
  countCustomers
};
