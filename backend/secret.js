const secrets = {
  dbUri: "mongodb://user:yuval2604@ds057847.mlab.com:57847/tovo"
};

const getSecret = key => secrets[key];

module.exports = getSecret;
