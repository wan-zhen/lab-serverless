import * as functions from 'firebase-functions';
import * as express from 'express';
import * as bodyParser from 'body-parser';
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
const app = express();
const main = express();
app.use('/api/v1', main);
main.use(bodyParser.json());
main.use(bodyParser.urlencoded({ extended: false }));
export const webApi = functions.https.onRequest(main);
app.get('/demo', (req, res) => {
  res.status(200).send({
    result: [1, 2, 3]
  });
});
