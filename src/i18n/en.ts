export default {
  header: {
    brand: "KAMEREO"
  },
  sidebar: {
    brand: "KAMEREO",
    addr: "135 Hai Ba Trung",
    changeStore: "CHANGE STORE",
    favoriteItems: "FAVORITE ITEMS",
    dashboard: {
      title: "Dashboard",
      list: [
        { des: "Overview", src: `images/icons/home.svg` },
        { des: "Orders", src: `images/icons/home.svg` },
        { des: "Suppliers List", src: `images/icons/home.svg` },
        { des: "Statistic", src: `images/icons/home.svg` }
      ]
    },
    marketPlace: {
      title: "Market Place",
      list: [{ des: "market", src: `images/icons/home.svg` }]
    },
    generalSettings: {
      title: "General Settings",
      list: [
        { des: "Company info", src: `images/icons/home.svg` },
        { des: "Store info", src: `images/icons/home.svg` },
        { des: "User management", src: `images/icons/home.svg` }
      ]
    }
  },
  profile: {
    helmet: "Kamereo Edit Profile",
    brand: "KAMEREO",
    storeInfo: "Store Information",
    infoDetails: {
      title: "STORE INFO.",
      name: "Name",
      address: "Address",
      phone: "Phone #"
    },
    redInvoiceInfo: {
      title: "RED INVOICE INFO.",
      companyName: "Company Name",
      address: "Address",
      mst: "MST"
    },
    btnEditProfile: "Edit Profile",
    delivery: {
      title: "DELIVERY DEFAULT MESSAGE",
      btnUpdate: "Update"
    }
  },
  editProfile: {
    title: "EDIT STORE PROFILE",
    storeImage: {
      title: "STORE IMAGE",
      btnRemove: "Remove",
      btnUpload: "Upload Image"
    },
    form: {
      infoDetails: {
        title: "BASIC INFO.",
        name: "Store Name",
        address: "Store Address",
        phone: "Phone #"
      },
      redInvoiceInfo: {
        title: "RED INVOICE INFO.",
        companyName: "Company Name",
        address: "Company Address",
        mst: "MST"
      },
      btnSave: "Save",
      btnCancel: "Cancel"
    },
    toast: {
      success: "Edit profile success",
      error: "Something went wrong"
    }
  },
  dropdown: {
    city: {
      title: "City"
    },
    district: {
      title: "District"
    }
  }
};
