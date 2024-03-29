## weather-app

ReactJS Single Page Application to request weather data for US zip codes and hosted in AWS.

## Serverless Implementation

The static content files are stored in an S3 bucket that is configured for Static website hosting. The serverless backend is implemented with AWS API Gateway and AWS Lambda. The Lambda function code, written in Python, makes calls to a third-party OpenWeather API and can be viewed here https://github.com/nugeal/weather-app-service/blob/main/python-lambda/weather-service-lambda.py

![image](https://github.com/nugeal/weather-app/assets/20147221/1bfbbb0f-7ccf-4d8e-a63d-1105e48ca225)


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


