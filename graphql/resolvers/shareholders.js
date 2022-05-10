const Shareholder = require("../../models/Shareholder");

module.exports = {
  Mutation: {
    async addshareholder(
      _,
      { addShareholderInput: { firstname, address, iban } },
      context,
      info
    ) {
      const newShareholder = new Shareholder({
        firstname,
        address,
        iban,
      });

      const res = await newShareholder.save();

      return {
        ...res._doc,
        id: res._id,
      };
    },
  },
  Query: {
    async getShareholders() {
      try {
        const shareholders = await Shareholder.find();
        return shareholders;
      } catch (err) {
        throw new Error(err);
      }
    },
  },
};
