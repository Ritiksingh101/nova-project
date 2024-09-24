const express = require("express");
const router = express.Router();
const Productdetails = require("../models/Productdetails");

router.get("/", async (req, res) => {
  try {
    const productdetails = await Productdetails.find();
    res.status(200).json({
      data: productdetails,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const productdetails = await Productdetails.findById(req.params.id);

    res.status(200).json({
      data: productdetails,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const productdetails = new Productdetails(req.body);
    const newproductdetails = await productdetails.save();

    res.status(200).json({
      data: newproductdetails,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
});



router.put("/:id", async (req, res) => {
  try {
    const productdetails = await Productdetails.findById(req.params.id);

    if (!productdetails) {
      return res.status(400).json({ message: "Productdetails does not exist" });
    }
    productdetails.Title = req.body.Title || productdetails.Title;
    productdetails.Price = req.body.Price || productdetails.Price;
    productdetails.Disceiption = req.body.Disceiption || productdetails.Disceiption;
    productdetails.Quantite = req.body.Quantite || productdetails.Quantite;
    productdetails.Categories = req.body.Categories || productdetails.Categories;
    productdetails.Image = req.body.Image || productdetails.Image;
  
    const updatedProductdetails = await productdetails.save();

    res.status(200).json({
      data: updatedProductdetails,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Productdetails.findByIdAndRemove(req.params.id);

    res.status(200).json({
      message: "Productdetails is deleted",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

module.exports = router;
