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

const req = https.request(options, res => {
    console.log(`statusCode: ${res.statusCode}`)
    let api_body: any[] = [];
    let api_answer: string = '';
    let statusCode: number;

    res.on('data', (d) => {
      statusCode = 200;
      api_body.push(d);
      api_answer = Buffer.concat(api_body).toString();
    }).on('end', () => {
      showAnswer(api_answer, statusCode);
    })
})

req.on('error', error => {
    console.error(error)
    showAnswer(null, 0);
})

req.end()
var router = Router();
/* GET home page. */

function showAnswer(answer_api: any, status_code: number){
  let answerJson = JSON.parse(answer_api);
  router.route('/')
  .get((req, res) => {
    let answer = {
      status: '',
      code: 0,
      message: '',
      data: {}
    };
    if (res.statusCode === 200){
      if (status_code === 200){
        answer = {
          status: 'success',
          code: status_code,
          message: 'Successful Request',
          data: answerJson
        }
      }else{
        answer = {
          status: 'Github error',
          code: status_code,
          message: 'Error at retrieving data from GitHub',
          data: {}
        }
      };
      res.send(answer);
    }else{
      answer = {
        status: 'Service error',
        code: res.statusCode,
        message: res.statusMessage,
        data: {}
      }
      res.send(answer);
    }
    
  });
}

export default router;