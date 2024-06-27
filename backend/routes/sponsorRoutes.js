//form sign up routes
const router = require("express").Router();
const sponsorController = require("../controllers/sponsorControllers");
//get all sign ups - get - /sponsor/all
router.get("/all", sponsorController.getAllSponsors);

//create sign up - post - /sponsor/create
router.post("/create", sponsorController.createSponsor);

//update sign up - put - /sponsor/update/:username
router.put("/update/:username", sponsorController.updateSponsor);

//delete sign up - delete - /sponsor/delete/:id
router.delete("/delete/:username", sponsorController.deleteSponsor);

module.exports = router;
