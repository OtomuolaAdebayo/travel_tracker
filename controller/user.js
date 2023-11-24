const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();


const createUser = async (req, res) => {
  try {
      const newUser = await prisma.user.create({
        data: {
          name: req.body.userName,
          age: req.body.userAge,
          country: req.body.userCountry,
        },
      });
      res.status(200).json(newUser);
  } catch (error) {
    res.status(400).json({ error: "error trying to create user"})
  }
};

module.exports = createUser