import mongoose from 'mongoose';
import colors from 'colors';

export default () => {
  const connect = () => {
    mongoose
      .connect('mongodb://localhost:27017/chattyapp-backend')
      .then(() => {
        console.log(
          colors.bgMagenta('Successfully connected to database.')
        );
      })
      .catch((error) => {
        console.log('Error connecting to database', error);
        return process.exit(1);
      });
  };

  connect();

  mongoose.connection.on('disconnected', connect);
};
