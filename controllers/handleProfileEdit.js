const User = require("../models/User");

const handleProfileEdit = async (req, res, next) => {
  try {
    const { userId, firstName, lastName, imageUrl } = req.body;

    const user = await User.findById(userId);

    if (imageUrl) {
      user.avatar = imageUrl;
    }
    user.firstName = firstName;
    user.lastName = lastName;

    const doc = await user.save();
    return res.json({ user: doc });
  } catch (err) {
    return res.json({ message: err.message });
  }
};

module.exports = handleProfileEdit;
