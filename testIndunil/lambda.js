let SL_REDIS = require('slappforge-sdk-redis');
let clusterManager = require('./ClusterManager');
const redis = new SL_REDIS.Redis(clusterManager);

exports.handler = function (event, context, callback) {
    // You must always quit the redis client after it's used
    redis.persist({
        clusterIdentifier: 'clster',
        params: ['1']
    }, function (error, response, redisClient) {
        if (error) {
            console.log(error);
            console.log("errrrrrr");
            callback(error);
        } else {
                        console.log("redissss");
            callback(redisClient);
            //redisClient.quit();
        }
    });

    callback(null, { "message": "Successfully executed" });
}