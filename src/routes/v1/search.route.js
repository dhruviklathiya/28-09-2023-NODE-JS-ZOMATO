const express = require("express");
const validate = require("../../middlewares/validate");
const { search_Validation } = require("../../validations");
const { search_Controller } = require("../../controllers");
const router = express.Router()

//  Searches list city by state
router.get(
    "/city-by-state/:stateId",
    search_Controller.city_by_state
)
router.post(
    "/city-by-state-json",
    validate(search_Controller.city_by_state),
    search_Controller.city_by_state_json
)
router.get(
    "/city-by-params-state-name/:stateName",
    search_Controller.city_by_params_state_name
)
//  Searches list restaurant by city
router.get(
    "/restaurant-by-city/:cityId",
    search_Controller.restaurant_by_city
)
router.post(
    "/restaurant-by-city-json",
    validate(search_Controller.restaurant_by_city),
    search_Controller.restaurant_by_city_json
)
router.get(
    "/restaurant-by-params-city-name/:cityName",
    search_Controller.restaurant_by_params_city_name
)

module.exports = router;