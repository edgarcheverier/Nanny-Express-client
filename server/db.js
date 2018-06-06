const mongoose = require('mongoose')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/nannies', () => {
    console.log('mongodb connected')
})
