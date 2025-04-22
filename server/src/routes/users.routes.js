const express = require("express");
const router = express.Router();

const modelUser = require("../models/users.model");

const { asyncHandler, authUser, authAdmin } = require("../auth/checkAuth");

const controllerUsers = require("../controllers/users.controller");

router.post("/api/register", asyncHandler(controllerUsers.register));
router.post("/api/login", asyncHandler(controllerUsers.login));
router.post("/api/login-google", asyncHandler(controllerUsers.loginGoogle));
router.get("/api/auth", authUser, asyncHandler(controllerUsers.authUser));
router.get("/api/logout", authUser, asyncHandler(controllerUsers.logout));
router.get("/api/refresh-token", asyncHandler(controllerUsers.refreshToken));
router.post(
  "/api/change-password",
  authUser,
  asyncHandler(controllerUsers.changePassword)
);
router.post(
  "/api/send-mail-forgot-password",
  asyncHandler(controllerUsers.sendMailForgotPassword)
);
router.post("/api/reset-password", asyncHandler(controllerUsers.verifyOtp));
router.post(
  "/api/update-info-user",
  authUser,
  asyncHandler(controllerUsers.updateInfoUser)
);
router.post(
  "/api/update-password",
  authUser,
  asyncHandler(controllerUsers.updatePassword)
);

router.post("/api/login-google", asyncHandler(controllerUsers.loginGoogle));

router.get(
  "/api/get-admin-stats",
  authAdmin,
  asyncHandler(controllerUsers.getAdminStats)
);
router.get(
  "/api/get-all-users",
  authAdmin,
  asyncHandler(controllerUsers.getAllUser)
);

router.get("/admin", authAdmin, asyncHandler(controllerUsers.authAdmin));

module.exports = router;
