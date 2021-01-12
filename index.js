require('dotenv').config()
const request = require('./request/request')

const handler = async() => {
    //Different examples from Request Methods
    await request.getList()
    await request.get()
    await request.post()
    await request.put()
    await request.patch()
    await request.delete()
    await request.query()
}

handler()