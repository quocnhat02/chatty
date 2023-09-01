import mongoose from 'mongoose';
import { config } from './config';

export default async () => {
  const connect = async () => {
    mongoose
      .connect(`${config.DATABASE_URL}`)
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
