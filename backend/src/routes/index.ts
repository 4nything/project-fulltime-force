import { json, Router } from 'express';
import https from 'https';

const options = {
    hostname: 'api.github.com',
    path: '/repos/4nything/project-fulltime-force/commits',
    method: 'GET',
    port: 443,
    headers: {
        'Accept': 'application/vnd.github.v3+json',
        'User-agent': 'request'
    }
}

var Answer: string = '';

const req = https.request(options, res => {
    console.log(`statusCode: ${res.statusCode}`)
    let body: any[] = [];

    res.on('data', (d) => {
      body.push(d);
      Answer = Buffer.concat(body).toString();
    }).on('end', () => {
      showAnswer(Answer);
    })
})

req.on('error', error => {
    console.error(error)
})

req.end()
var router = Router();
/* GET home page. */

function showAnswer(answer: any){
  let answerJson = JSON.parse(answer);
  router.route('/')
  .get((requ, resp) => resp.send(answerJson));
}

export default router;
