import https from 'https';

const options = {
    hostname: 'api.github.com',
    path: '/users/4nything',
    method: 'GET',
    port: 443,
    headers: {
        'Accept': 'application/vnd.github.v3+json',
        'User-agent': 'request'
    }
}

const req = https.request(options, res => {
    console.log(`statusCode: ${res.statusCode}`)

    res.on('data', d => {
        process.stdout.write(d)
    })
})

req.on('error', error => {
    console.error(error)
})

req.end()

export default req