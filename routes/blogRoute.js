const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blogController");
// blog routes
router.get("/", blogController.blogIndex);

router.post("/", blogController.blogCreatePost);

router.get("/create", blogController.blogCreateGet);

router.get("/:id", blogController.blogDetails);

router.delete("/:id", blogController.blogDelete);

module.exports = router;
