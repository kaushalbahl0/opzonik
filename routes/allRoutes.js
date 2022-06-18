const router=require("express").Router();
const data=require("../descrip")
const productDesc=require("../productButton");
const productImage=require("../productButton");
const productDetail=require("../productInfo")


router.get("/home",(req,res)=>{
    
    const listData=data.opzonik;
    const listButton=productDesc.product
    const productImg=productImage.productimg
    console.log(productImg)
 
    res.render("index",{"data":listData,"button":listButton,"productimage":productImg})
})


router.get("/contact",(req,res)=>{
    const listData=data.opzonik;
    const listButton=productDesc.product
    const productImg=productImage.productimg
    console.log("kaushal")
    res.render("contact",{"data":listData,"button":listButton,"productimage":productImg})
})
router.get("/custom",(req,res)=>{
    const listData=data.opzonik;
    const listButton=productDesc.product
    const productImg=productImage.productimg
    console.log("kaushal")
    res.render("custum",{"data":listData,"button":listButton,"productimage":productImg})
})
router.get("/:key",(req,res)=>{
    // console.log(req.params.key);
    const listData=data.opzonik
    const listButton=productDesc.product
    const productImg=productImage.productimg
    const category=req.params.key
    const productD=productDetail[category]
    console.log(category)
    
    res.render("productDetails",{"data":listData,"button":listButton,"productimage":productImg,"productInfo":productD})
})


module.exports=router