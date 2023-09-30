const { Order } = require("../models");
// Get order by name
const get_order_by_name = async(order_name) => {
    return Order.findOne({order_name})
}
// Create order
const create_order = async(reqbody) => {
    return Order.create(reqbody);
}
// Get order list
const get_order_list = async() => {
    return Order.find().populate("cart").populate("user");
}
// Get order by id
const get_order_by_id = async(order_id) => {
    return Order.findById(order_id);
}
// Update order by id
const update_order = async(order_id,reqbody) => {
    return Order.findByIdAndUpdate(order_id,{$set:reqbody});
}
// Delete order
const delete_order = async(order_id) => {
    return Order.findByIdAndDelete(order_id);
}
// Exporting services object
module.exports = {
    get_order_by_name,
    create_order,
    get_order_by_id,
    update_order,
    delete_order,
    get_order_list
}

