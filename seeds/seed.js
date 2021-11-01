const sequelize = require("../config/connection");
const waters = require("./laCroix.json")
const {LaCroix} = require("../models")

const seed = async ()=>{
    await sequelize.sync({force:true})
    const waterz = await LaCroix.bulkCreate(waters);
    console.log(waterz);
}

seed()