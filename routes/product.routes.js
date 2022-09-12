const { authJwt, verifyProducts } = require("../middlewares")
const controller = require("../controllers/products.controller");
const { checkUserListExists } = require("../middlewares/verifyProducts");


module.exports = function(app) {
    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });
    
    app.get("/api/products",[authJwt, verifyProducts.checkUserListExists], controller.getAllProducts)
    app.post("/api/products/create",[authJwt, verifyProducts.checkDuplicateList],controller.createProductsList)
    app.delete("/api/products/delete",[authJwt, verifyProducts.checkUserListExists], controller.deleteProductsList)
    app.delete("/api/products/deleteitem/:name",[authJwt, verifyProducts.checkUserListExists], controller.deleteProductsItem)
    app.put("/api/products/update", [authJwt, verifyProducts.checkUserListExists], controller.updateProductList)
}