const express = require("express");
const app = express();
const path = require("path");
const ENVS = require("dotenv").config().parsed;
const cors = require("cors");

app.use(express.static(path.resolve(__dirname, "../public")));
app.use(cors());
app.get("/", (req, res) => {
  res.json({
    status: 1,
    data: {
      id: 1,
      title: "Hello World"
    }
  });
});
app.get("/profile", (req, res) => {
  res.json({
    status: 1,
    data: {
      id: 1,
      logoUrl: `${ENVS.API_DOMAIN}/images/logo.png`,
      name: "K.O.I The",
      address: `42/24 Trần Đình Xu`,
      district: `Q.1`,
      city: `TP HCM`,
      phone: `+84902751467`,
      role: "Administrator",
      avatar_url: `${ENVS.API_DOMAIN}/images/profile/avatar_url.jpg`,
      redInvoice: {
        name: "Kamereo",
        address: "Nguyen Cuu Van",
        district: "Binh Thanh",
        city: "HCMC",
        taxCode: "P7774994"
      }
    }
  });
});

app.listen(ENVS.SERVER_PORT, () =>
  console.log(`Server start at port: ${ENVS.SERVER_PORT}`)
);
