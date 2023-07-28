import mongoose from 'mongoose';

export default function connector(url) {
  mongoose
    .connect(url)
    .then((res) => {
      console.log('Database Connected!');
    })
    .catch((err) => {
      console.log('Database Not Connected!');
    });
}
