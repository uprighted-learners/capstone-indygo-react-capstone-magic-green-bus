//sponsor sign up functionallity
const Sponsor = require("../models/sponsorModel");


//get all sign ups - get - /sponsor/all
export const getAllSponsors = async (req, res) => {
    try {
        const sponsors = await Sponsor.find();
        res.status(200).json(sponsors);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};


//get sign up by id - get - /sponsor/:id
export const getSponsorById = async (req, res) => {
    try {
        const sponsor = await Sponsor.findById(req.params.id);
        res.status(200).json(sponsor);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

//function for creating a neew sponsor sign up
//export const createSponsor = async (req, res) => {




//function for updating sponsor sign up information
//export const updateSponsor = async (req, res) => {



//function for deleting sponsor sign up
//export const deleteSponsor = async (req, res) => {
    
