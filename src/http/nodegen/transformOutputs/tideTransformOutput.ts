export default {
  // tideGet
  tideGet: {
    meta: { totalResultCount: Number, offset: Number, limit: Number },
    data: [
      {
        id: Number,
        date: String,
        location: String,
        cloudCoverPercentage: Number,
        humidityPercentage: Number,
        temperature: Number,
      },
    ],
  },
};
