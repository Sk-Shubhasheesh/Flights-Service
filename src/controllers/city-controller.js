const { StatusCodes } = require('http-status-codes');

const { CityService } = require('../services');
const { SuccessResponce, ErrorResponce } = require('../utils/common');
const { log } = require('winston');
const { response } = require('express');



/**
 * POST : /cities 
 * req-body {name: 'London'}
 */
async function createCity(req, res) {
    try {
        const city = await CityService.createCity({
            name: req.body.name
        });
        SuccessResponce.data = city;
        return res
                .status(StatusCodes.CREATED)
                .json(SuccessResponce);
    } catch(error) {
        ErrorResponce.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponce);
    }
}

// for getting city
async function getCity(req, res){
    try {
        
        const city = await CityService.getCity();
        SuccessResponce.data = city;
        return res
                .status(StatusCodes.OK)
                .json(SuccessResponce);

    } catch (error) {
        ErrorResponce.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponce);
    }
}


// for geting cities by id
async function getCities(req, res){
    try {
        const cities = await CityService.getCities(req.params.id);
        SuccessResponce.data = cities;
        return res
                .status(StatusCodes.OK)
                .json(SuccessResponce)
    } catch ( error) {
        ErrorResponce.error = error;
        return res
               .status(error.statusCode)
               .json(ErrorResponce);
        
    }
} 

// destroy city
async function destroyCites(req, res){
    try {
        const destroy = await CityService.destroyCity(req.params.id);
        SuccessResponce.data = destroy;
        return res
                .status(StatusCodes.OK)
                .json(SuccessResponce)
    } catch (error) {
        ErrorResponce.error = error
        return res
               .status(error.statusCode)
               .json(ErrorResponce);
    }
}

// update
async function updateCities(req, res){
    try {
        const update = await CityService.upDateCity(req.params.id, req.body);
        SuccessResponce.data = update;
        return res
                .status(StatusCodes.OK)
                .json(SuccessResponce)
    } catch (error) {
        ErrorResponce.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponce)
        
    }
}

module.exports = {
    createCity,
    getCity,
    getCities,
    destroyCites,
    updateCities
}