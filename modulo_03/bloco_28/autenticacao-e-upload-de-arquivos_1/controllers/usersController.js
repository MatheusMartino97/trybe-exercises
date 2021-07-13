const usersService = require('../services/usersService');
const rescue = require('express-rescue');

const signIn = rescue(async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await usersService.signIn(username, password);

    if (!user) throw new Error('Erro ao cadastrar o usuário');

    return res
      .status(200)
      .json({ message: 'Usuário cadastrado com sucesso!', user });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

const getAllUsers = rescue(async (_req, res) => {
  try {
    const allUsers = await usersService.getAllUsers();

    return res.status(200).json(allUsers)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
})

module.exports = {
  signIn,
  getAllUsers
};
