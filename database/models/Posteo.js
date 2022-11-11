module.exports = function (sequelize, dataTypes) {

    let alias = "Posteo"

    let cols = { 
        id : {
            autoIncrement : true,
            primaryKey : true,
            type : dataTypes.INTEGER
        },
        foto : {
            type : dataTypes.STRING
        },
        texto : {
            type : dataTypes.STRING
        },
        userId : {
            type : dataTypes.INTEGER
        }
    }

    let config = {
        tableName : "posteos",
        timestamps : false,
        underscored : false
    }

    let Posteos = sequelize.define(alias, cols, config);

    return Posteos ;
}
