const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const createTrip = async (req, res) => {
  try {
      const newTrip = await prisma.trip.create({
        data: {
          name: req.body.tripName,
          // end_date: new DateTime.now(),
          city: req.body.tripCity,
          country: req.body.tripCountry,
          userId: req.body.userId,
        },
      });
      res.status(200).json(newTrip);
  } catch (error) {
    res.status(400).json({error: "error occured creating a new trip"})
  }

}

const getAllTrip = async (req, res) => {
  const getTrips = await prisma.trip.findMany()
  res.status(200).json(getTrips)
}

const updateTripDetails = async (req, res) => {
  try {
      const tripId = parseInt(req.params.id);
      const tripUpdated = await prisma.trip.update({
        where: {
          id: tripId,
        },
        data: {
          name: req.body.tripName,
          // end_date: new DateTime.now(),
          city: req.body.tripCity,
          country: req.body.tripCountry,
        },
      });
      res.status(200).json(tripUpdated);
  } catch (error) {
    res.status(400).json({ error: "trip update error"})
  }
}

const getTripDetails = async (req, res) => {
  const tripDetails = await prisma.trip.findUnique({
    where: {
      id: parseInt(req.params.id),
    },
  });
  if(tripDetails) {
    res.status(200).json(tripDetails);
  } else {
    res.status(400).json({message: "Trip not found"})
  }
};

const deleteTrip = async (req, res) => {
  const tripDeleted = await prisma.trip.delete({
    where: {
      id: parseInt(req.params.id)
    }
  })
  if (tripDeleted) {
    res.status(200).json(tripDeleted);
  } else {
    res.status(400).json({message: "there is an error deleting this trip"})
  }
  
}

module.exports = {
  createTrip,
  getAllTrip,
  getTripDetails,
  updateTripDetails,
  deleteTrip
}
