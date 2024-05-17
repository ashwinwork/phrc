import path = require("path");

export async function getForm(req, res) {
    console.log("helloooooooooooooooooooo");
    res.sendFile(path.resolve(__dirname+"../../../static/post-product.html"))
}