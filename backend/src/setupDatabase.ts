import mongoose from 'mongoose';

export default async () => {
  const connect = async () => {
    mongoose
      .connect('mongodb://127.0.0.1:27017/chattyapp-backend')
      .then(() => {
        console.log('Successfully connected to database.');
      })
      .catch((error) => {
        console.log('Error connecting to database', error);
        return process.exit(1);
      });
  };
  connect();

  await mongoose.connection.on('disconnected', connect);
};
