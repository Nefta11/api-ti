const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Nefta11:<7641146446Nefta>@atlascluster.3mhp7ar.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp')
.then(db=> console.log('Mongodb atlas connected'))
.catch(err=>console.error(err));