const express = require("express");
const customerRoutes = express.Router();

const customers = require("../db/customers");

customerRoutes.get("/", (req, res) => {
  res.send(customers);
});

module.exports = customerRoutes;

customerRoutes.post("/", (req, res) => {
  const newCustomer = req.body;
  customers.push(newCustomer);
  res.send(newCustomer);
});

customerRoutes.delete("/:id", (req, res) => {
  const id = req.params.id;
  const index = customers.findIndex((customer) => customer.id === id);
  customers.splice(index, 1);
  res.send(customers);
});
