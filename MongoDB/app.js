    const express = require('express')
const app = express()
const {createProduct,getAllProducts, deleteProduct,updateProduct} = require("./ProductsOperations")
const mongoose = require("mongoose")

app.use(express.json())
mongoose.connect("mongodb://localhost/mernstack",{ useNewUrlParser: true,        useUnifiedTopology: true  })
.then(async()=>{
    console.log("connection to mongodb succesfully created")
    // let product = await createProduct("lenovo",500,["qhqhqhqh","bruhhh"])
    // console.log(product)
    

    // let allProducts = await getAllProducts()
    // console.log(allProducts)

    // console.log(await deleteProduct("60c76f95eaa0912ebcd3d541"))

    let updateproduct = updateProduct("60c7675bef01133300e546aa","Dell Updated",250,[])
}).catch(err=>{
    console.log("error connecting")
    console.log(err)
})
app.listen(3000)