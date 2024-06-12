//form sign up routes
const router = require("express").Router();
const sponsorController = require("../controllers/sponsorControllers");
//get all sign ups - get - /sponsor/all
router.get("/all", sponsorController.getAllSponsors);

//get sign up by id - get - /sponsor/:id
router.get("/:id", sponsorController.getSponsorById);

//create sign up - post - /sponsor/create
router.post("/create", sponsorController.createSponsor);

//update sign up - put - /sponsor/update/:id
router.put("/update/:id", sponsorController.updateSponsor);

//delete sign up - delete - /sponsor/delete/:id
router.delete("/delete/:id", sponsorController.deleteSponsor);

module.exports = router;

