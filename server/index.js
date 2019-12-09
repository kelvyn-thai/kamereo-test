const express = require("express");
const app = express();
const path = require("path");
const ENVS = require("dotenv").config().parsed;
const cors = require("cors");
const multer = require("multer");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(express.static(path.resolve(__dirname, "../public")));
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.resolve(__dirname, "../public/images"));
  },
  filename: (req, file, cb) => {
    cb(null, `logo.png`);
  }
});
const upload = multer({ storage: storage });
let dataFactory = {
  id: 1,
  full_name: "Jayce Thai",
  logoUrl: `${ENVS.API_DOMAIN}/images/logo.png`,
  name: "K.O.I The",
  address: `42/24 Trần Đình Xu`,
  district: `Q.1`,
  city: `TP HCM`,
  phone: `0902751467`,
  role: "Administrator",
  avatar_url: `${ENVS.API_DOMAIN}/images/profile/avatar_url.jpg`,
  redInvoice: {
    name: "Kamereo",
    city: "Hồ Chí Minh",
    taxCode: "P7774994",
    address: "Nguyen Cuu Van",
    district: "Bình Thạnh",
  }
};

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
    data: { ...dataFactory }
  });
});

app.post("/profile", (req, res) => {
  dataFactory = {
    ...dataFactory,
    ...req.body
  };
  console.log('req', req.body)
  res.json({
    status: 1,
    data: { ...dataFactory }
  });
});

app.put("/profile/update-avatar", upload.single("avatar"), (req, res) => {
  res.json({
    status: 1,
    data: {
      avatar_url: `${ENVS.API_DOMAIN}/images/logo.png`
    }
  });
});

app.listen(ENVS.SERVER_PORT, () =>
  console.log(`Server start at port: ${ENVS.SERVER_PORT}`)
);
