const captainModel = require('../models/captain.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { validationResult} = require('express-validator');

module.exports.createCaptain = async ({firstname, lastname, email,password,color,plate,capacity,vehicleType}) => {
    if(!firstname || !email || !password|| !color|| !plate|| !capacity|| !vehicleType){
        throw new Error('All fields are required');
    }
    const captain = await captainModel.create({    
    fullname:{
        firstname,
        lastname
    },
    email,
    password,
    vehicle: {
    color,
    plate,
    capacity,
    vehicleType
    }
    });


    return captain; 
}