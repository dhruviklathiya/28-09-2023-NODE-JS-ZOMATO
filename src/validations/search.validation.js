const Joi = require("joi");

// Search city by state name
const city_by_state = {
    params: Joi.object({
        state_name:Joi.string().required().trim()
    })
}
module.exports = {
    city_by_state
}