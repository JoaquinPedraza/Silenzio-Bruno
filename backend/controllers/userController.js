module.exports = (User) => {

    const getUsers = async (req, res) => {
        const response = await User.find();
        res.status(200).json(response);
    };

    return {getUsers};
}