const axios = require('axios')

exports.request = async(options) => {
    const response = await axios(options)
    const result = {
        status: response.status,
        data: response.data
    }
    return result
}