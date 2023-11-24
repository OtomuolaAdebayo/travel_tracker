const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

const createExpenses = async (req, res) => {
  try {
      const newExpenses = await prisma.expenses.create({
        data: {
          name: req.body.expensesName,
          id: req.body.userId,
          amount: req.body.amount,
          currency: req.body.currency,
          description: req.body.description,
          trip: req.body.tripId,
        },
      });
      res.status(200).json(newExpenses);
  } catch (error) {
    res.status(400).json({error: "expenses error"})
  }
};

const getAllExpenses = async (req, res) => {
  const getExpenses = await prisma.expenses.findMany();
  res.status(200).json(getExpenses);
};

const updateExpensesDetails = async (req, res) => {
  try {
      const expensesId = parseInt(req.params.id);
      const expensesUpdated = await prisma.expenses.update({
        where: {
          id: expensesId,
        },
        data: {
          name: req.body.expensesName,
          id: req.body.userId,
          amount: req.body.amount,
          currency: req.body.currency,
          description: req.body.description,
        },
      });
      res.status(200).json(expensesUpdated);
  } catch (error) {
    res.status(400).json({error: "error updating expenses"})
  }

};

const getExpensesDetails = async (req, res) => {
  const expensesDetails = await prisma.expenses.findUnique({
    where: {
      id: parseInt(req.params.id),
    },
  });
  if (expensesDetails){
    res.status(200).json(expensesDetails)
  } else {
    res.status(400).json({message: "Expenses not Found"})
  }
};

const deleteExpenses = async (req, res) => {
  const expensesDeleted = await prisma.expenses.delete({
    where: {
      id: parseInt(req.params.id),
    },
  });
  if (expensesDeleted) {
    res.status(200).json(expensesDeleted);
  } else {
    res.status(500).json({ error: "An error occurred while deleting expenses." });
  }
}

module.exports = {
  createExpenses,
  getAllExpenses,
  getExpensesDetails,
  updateExpensesDetails,
  deleteExpenses
};
