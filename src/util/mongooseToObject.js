module.exports = {
    mutipleToObject : function(mongoose) {
        return mongoose.map(mongoose => mongoose.toObject());
    },
    
    singleToObject : function(mongoose) {
        return mongoose ? mongoose.toObject() : mongoose;
    }
};