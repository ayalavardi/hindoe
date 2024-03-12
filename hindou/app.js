const express = require('express')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')

const advertiser = require('./routes/advertiser')
const apartment = require('./routes/apartment')
const category = require('./routes/category')
const user = require('./routes/user')
const city = require('./routes/city')
const citiesfromfour = require('./routes/citiesfromfour')

const connectDB = require('./connectToDB')
const cors = require('cors');
const multer = require('multer')
const app = express()
app.use(express.json())

app.use(cors());

app.use(bodyParser.json());

dotenv.config();

connectDB()


// Connection parameters for mongoose
const connectionParams = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
};
//-----------pic------------------------------
// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });

// הפעל middleware כדי להפעיל פעולות בקשה מסוג `multipart/form-data`
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(upload.single('file'));  // התאם לשם שהוגדר ב-FormData
/////////////////////////////////////////////////


app.get('', (req, res) => {
    res.status(200).send('🐏〰🐏')
})

app.use('/advertiser', advertiser)
app.use('/apartment', apartment)
app.use('/category', category)
app.use('/user', user)
app.use('/city', city)
app.use('/citiesfromfour', citiesfromfour)
// app.use('/uploads',express.static(path.json(__dirname,'upload')))
app.listen(3001, () => {
    console.log(`my app is listening in http://localhost:3001`);
})
// cities
// https://data.gov.il/api/3/action/datastore_search?resource_id=e9701dcb-9f1c-43bb-bd44-eb380ade542f&fields=name_in_hebrew,_id
// apartments-416421
// gcurl=apar
///////////
// https://location.foursquare.com/developer/reference/place-search
// fsq30rNsSO/RDTY+uevVfikddXPhzsIDQEgoBd+ojHLlwcQ=
// --url 'https://api.foursquare.com/v3/places/search?query=coffee&fields=name&near=jerusalem' \

// https://location.foursquare.com/developer/reference/autocomplete-1
// https://api.foursquare.com/v3/autocomplete?query=haifa