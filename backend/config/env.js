import env from 'dotenv';
env.config();

export const envData = {
    port: process.env.PORT,
    mongoURL: process.env.MONGODB_URL || process.env.MONGODB_URI,
    dbName: process.env.MONGO_DB_NAME || process.env.DBNAME,
};

if (!envData.mongoURL) {
    console.log("Mongo URL is not defined in .env file");
    process.exit(1);
}

if (!envData.dbName) {
    console.log("Database name is not defined in .env file");
    process.exit(1);
}

if (!envData.port) {
    console.log("Port is not defined in .env file");
    process.exit(1);
}




