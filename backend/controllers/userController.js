/* eslint-disable max-len */
const userController = (User) => {
  const getUsers = async (req, res) => {
    const response = await User.find();
    res.status(200).json(response);
  };

  const getUserById = async (req, res) => {
    const response = await User.findById(req.params.userId);
    res.json(response);
  };

  const postUsers = async (req, res) => {
    const user = new User(req.body);
    await user.save();
    res.status(202).json({message: 'The User has been create sucessfully', user});
  };

  const updateUser = async (req, res) => {
    const response = await User.updateOne(
        {_id: req.params.userId},
        {
          $set: {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            userName: req.body.userName,
            password: req.body.password,
            city: req.body.city,
            email: req.body.email,
          },
        });
    res.status(202).json({message: 'The User has been update sucessfully', response});
  };

  const deleteUserById = async (req, res) => {
    await User.findByIdAndDelete(req.params.userId);
    res.status(202).json('The User has been deleted sucessfully');
  };

  return {getUsers, postUsers, updateUser, deleteUserById, getUserById};
};


module.exports = userController;
