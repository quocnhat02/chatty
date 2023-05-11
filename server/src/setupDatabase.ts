import mongoose from 'mongoose';
import colors from 'colors';
import { config } from './config';

export default () => {
  const connect = () => {
    mongoose
      .connect(`${config.MONGODB_URL}`)
      .then(() => {
        console.log(colors.bgMagenta('Successfully connected to database.'));
      })
      .catch((error) => {
        console.log('Error connecting to database', error);
        return process.exit(1);
      });
  };

  connect();

  mongoose.connection.on('disconnected', connect);
};
