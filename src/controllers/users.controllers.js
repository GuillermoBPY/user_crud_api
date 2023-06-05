const catchError = require('./../utils/catchError');
const User = require('./../models/User');

const getAllUsers = catchError(async (req, res) => {
    const users = await User.findAll({ order: [['id']] });

    return res.json(users);
});

const createUser = catchError(async (req, res) => {
    const user = req.body;

    const userCreated = await User.create(user);

    return res.status(201).json(userCreated);
});

const getUserByPk = catchError(async (req, res) => {
    const { id } = req.params;

    const user = await User.findByPk(id);

    if (!user)
        return res
            .status(404)
            .json({ message: `User with ID ${id} not found` });

    return res.json(user);
});

const updateUser = catchError(async (req, res) => {
    const { id } = req.params;
    const user = req.body;

    const userUpdated = await User.update(user, {
        where: { id },
        returning: true,
    });

    if (!userUpdated)
        return res
            .status(404)
            .json({ message: `User with ID ${id} not found` });

    return res.json(userUpdated[1][0]);
});

const deleteUser = catchError(async (req, res) => {
    const { id } = req.params;

    const userDeleted = await User.destroy({ where: { id } });

    if (!userDeleted)
        return res
            .status(404)
            .json({ message: `User with ID ${id} not found` });

    return res.sendStatus(204);
});

module.exports = {
    getAllUsers,
    createUser,
    getUserByPk,
    updateUser,
    deleteUser,
};
