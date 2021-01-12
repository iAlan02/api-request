const api = require('./axios')

// Retrieving a list of objects from a GET request
exports.getList = async() => {
    const url = process.env.URL
    const object = 'posts'
    const path = object

    const options = {
        method: 'get',
        url: url + path
    }

    const result = await api.request(options)
    console.log(result)
}

// Retrieving an specific object from a GET request
exports.get = async() => {
    const url = process.env.URL
    const object = 'posts'
    const value = '5'
    const path = object + '/' + value

    const options = {
        method: 'get',
        url: url + path
    }

    const result = await api.request(options)
    console.log(result)
}

// Creating a new object from a POST request
exports.post = async() => {
    const url = process.env.URL
    const object = 'posts'
    const path = object

    const body = {
        title: 'foo',
        body: 'bar',
        userId: 1,
    }

    const options = {
        method: 'post',
        url: url + path,
        body: body
    }

    const result = await api.request(options)
    console.log(result)
}

// Updating an object from a PUT request
exports.put = async() => {
    const url = process.env.URL
    const object = 'posts'
    const value = '5'
    const path = object + '/' + value

    const body = {
        title: 'foo',
        body: 'bar',
        userId: 1,
    }

    const options = {
        method: 'put',
        url: url + path,
        body: body
    }

    const result = await api.request(options)
    console.log(result)
}

// Partially updating an object from a patch request
exports.patch = async() => {
    const url = process.env.URL
    const object = 'posts'
    const value = '5'
    const path = object + '/' + value

    const body = {
        title: 'foo'
    }

    const options = {
        method: 'patch',
        url: url + path,
        body: body
    }

    const result = await api.request(options)
    console.log(result)
}

// Deleting an object from a DELETE request
exports.delete = async() => {
    const url = process.env.URL
    const object = 'posts'
    const value = '5'
    const path = object + '/' + value

    const options = {
        method: 'delete',
        url: url + path
    }

    const result = await api.request(options)
    console.log(result)
}

// Retrieving an object with a query from a GET request
exports.query = async() => {
    const url = process.env.URL
    const object = 'posts'
    const value = 'userId=5'
    const path = object + '/?' + value

    const options = {
        method: 'get',
        url: url + path
    }

    const result = await api.request(options)
    console.log(result)
}