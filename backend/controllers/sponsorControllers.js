//sponsor sign up functionality
const Sponsor = require("../models/sponsorModel");
exports.getAllSponsors = async (req, res) => {
  try {
    const sponsors = await Sponsor.find();
    res.status(200).json(sponsors);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
//GET == 'read' a sponsor by id
exports.getSponsorById = async (req, res) => {
  const { id } = req.params;
  try {
    const sponsor = await Sponsor.findById(id);
    res.status(200).json(sponsor);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
//POST == 'create' a new sponsor
exports.createSponsor = async (req, res) => {
  const sponsor = req.body;
  const newSponsor = new Sponsor(sponsor);
  try {
    await newSponsor.save();
    res.status(201).json(newSponsor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
//UPDATE == 'update' a sponsor
exports.updateSponsor = async (req, res) => {
  const { id } = req.params;
  const sponsor = req.body;
  try {
    const updatedSponsor = await Sponsor.findByIdAndUpdate(id, sponsor, {
      new: true,
    });
    res.json(updatedSponsor);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
//DELETE == 'delete' a sponsor
exports.deleteSponsor = async (req, res) => {
  const { id } = req.params;
  try {
    const sponsor = await Sponsor.findByIdAndDelete(id);
    res.json({ message: "Sponsor deleted successfully." });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
