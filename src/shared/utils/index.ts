import exif from "exif-js";

export const EmailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

export const PhoneRegex = /^[0-9]+$/;

export const getEnvs = () => ({
  API_DOMAIN: `http://localhost:8080`
});

export const readFile = (file: any) =>
  new Promise(resolve => {
    var reader = new FileReader();
    reader.onload = (e: any) => resolve(e.target.result);
    reader.readAsDataURL(file);
  });

export const createImage = (data: any) =>
  new Promise(resolve => {
    const img = document.createElement("img");
    img.onload = () => resolve(img);
    img.src = data;
  });

export const rotate = (type: any, img: any) =>
  new Promise(resolve => {
    const canvas = document.createElement("canvas");

    exif.getData(img, function() {
      var orientation: any = exif.getAllTags(img).Orientation;

      if ([5, 6, 7, 8].indexOf(orientation) > -1) {
        canvas.width = img.height;
        canvas.height = img.width;
      } else {
        canvas.width = img.width;
        canvas.height = img.height;
      }

      var ctx: any = canvas.getContext("2d");

      switch (orientation) {
        case 2:
          ctx.transform(-1, 0, 0, 1, img.width, 0);
          break;
        case 3:
          ctx.transform(-1, 0, 0, -1, img.width, img.height);
          break;
        case 4:
          ctx.transform(1, 0, 0, -1, 0, img.height);
          break;
        case 5:
          ctx.transform(0, 1, 1, 0, 0, 0);
          break;
        case 6:
          ctx.transform(0, 1, -1, 0, img.height, 0);
          break;
        case 7:
          ctx.transform(0, -1, -1, 0, img.height, img.width);
          break;
        case 8:
          ctx.transform(0, -1, 1, 0, 0, img.width);
          break;
        default:
          ctx.transform(1, 0, 0, 1, 0, 0);
      }

      ctx.drawImage(img, 0, 0, img.width, img.height);
      // ctx.toBlob(resolve, type);
      canvas.toBlob(function(blob) {
        resolve(blob);
      });
    });
  });

export const empty = (obj: object) => {
  switch (typeof obj) {
    case "object":
      return !obj ? true : !Object.keys(obj).length;
    default:
      return !obj;
  }
};
