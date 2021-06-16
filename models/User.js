const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
      type: String,
      required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  favorites: {
    type: Object,
    data: {
      place_id: null,
      name: "",
      LatLng: "",
      address: "",
      hours: "",
      selected: {
        type: Array,
        data: {
          place_id: ""
        }
      },
    }
  },
  // selected: {
  //   type: Array,
  //   data: {
  //     place_id: ""
  //   }
  // },
}, {
  timestamps: true
})

module.exports = User = mongoose.model('User', UserSchema);
