const router = require("express").Router();
const cloudinary = require("../utils/cloudinary");
const upload = require("../utils/multer");
const User = require("../model/user");
router.post("/", upload.single("images"), async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path);

    // Create instance of user
    let user = new User({
      name: req.body.name,
      price: req.body.price,
      addImages: result.secure_url,
      cloudinary_id: result.public_id,
    });
    //save user
    await user.save();
    res.json(user);
  } catch (error) {
    console.log(error);
  }
});

router.get("/", async (req, res) => {
  try {
    let user = await User.find();
    res.json(user);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
