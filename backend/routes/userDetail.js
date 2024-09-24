const express = require("express");
const router = express.Router();
const UserDetail = require("../models/UserDetail");

router.get("/", async (req, res) => {
  try {
    const userDetail = await UserDetail.find();
    res.status(200).json({
      data: userDetail,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const userDetail = await UserDetail.findById(req.params.id);

    res.status(200).json({
      data: userDetail,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const userDetail = new UserDetail(req.body);
    const newuserDetail = await userDetail.save();

    res.status(200).json({
      data: newuserDetail,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
});



router.put("/:id", async (req, res) => {
  try {
    const userDetail = await UserDetail.findById(req.params.id);

    if (!userDetail) {
      return res.status(400).json({ message: "UserDetail does not exist" });
    }
    userDetail.name = req.body.name || userDetail.name;
    userDetail.password = req.body.password || userDetail.password;
    userDetail.email = req.body.email || userDetail.email;
    userDetail.phone = req.body.phone || userDetail.phone;
    userDetail.cart = req.body.cart || userDetail.cart;
   
  
    const updatedUserDetail = await userDetail.save();

    res.status(200).json({
      data: updatedUserDetail,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await UserDetail.findByIdAndRemove(req.params.id);

    res.status(200).json({
      message: "UserDetail is deleted",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

module.exports = router;
