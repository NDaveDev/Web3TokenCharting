var mongoose = require('mongoose');

var tokenHistorySchema = mongoose.Schema({

    records_transactions: Number,
    records_price: Number,

    chain: Number,
    
    router: String,
    pair: String,

    token0: {
        contract: String,
        name: String,
        symbol: String
    },
    token1: {
        contract: String,
        name: String,
        symbol: String
    },

    mainToken: String,
    dependantToken: String,

    burned: Number,
    mcap: Number,
    value: Number,
    price: Number,
    reserve0: Number,
    reserve1: Number,
    mainReserveValue: Number,

    volume: Number,

    variation: {
        hour: Number,
        day: Number,
        week: Number,
        month: Number
    }
    
}, { timestamps: { createdAt: 'created_at' } });

tokenHistorySchema.index({'token0.contract': 1});
tokenHistorySchema.index({'token1.contract': 1});
tokenHistorySchema.index({'variation.daily': 1});
tokenHistorySchema.index({pair: 1});
tokenHistorySchema.index({router: 1});
tokenHistorySchema.index({chain: 1});
/*
db.tokenhistories.ensureIndex({'token0.contract': 1});
db.tokenhistories.ensureIndex({'token1.contract': 1});
db.tokenhistories.ensureIndex({variation.daily': 1});
db.tokenhistories.ensureIndex({pair: 1});
db.tokenhistories.ensureIndex({router: 1});
db.tokenhistories.ensureIndex({chain: 1});
*/

module.exports = mongoose.model('TokenHistory', tokenHistorySchema);
