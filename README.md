# Kismet

Kismet is a convenient app that helps the user make decisions. Simply enter the category and items you want listed and watch the spinner make the decision for you. Alternatively, you can also have Kismet select from a list of random cocktails for you to try.

## Final Product

<!-- !["This is Kismet's Homepage."](https://github.com/au-richard/scheduler/blob/master/docs/homepage.png)

!["This is the form for booking an appointment."](https://github.com/au-richard/scheduler/blob/master/docs/appointment-form.png)

!["This is the confirmation for deleting an appointment."](https://github.com/au-richard/scheduler/blob/master/docs/delete-appointment-confirmation.png) -->

## Setup and Running the App

For the best user experience, use a mobile or tablet window in the browser to view the app.

You need **TWO** terminal windows/tabs for this (or some other plan for running two Node processes).

In one terminal, `cd` into `react-front-end`. Run `npm install` or `yarn` to install the dependencies. Then run `npm start` or `yarn start`, and go to `localhost:3000` in your browser.

In the other terminal, `cd` into `express-back-end`. Run `npm install` or `yarn` to install the dependencies, then `npm start` or `yarn start` to launch the server.

## Dependencies
### Front-End
- React ^17.0.2
- SASS ^1.50.0
- Node-SASS ^7.0.1
- Howler ^2.2.3
- React Router ^6.3.0
- Axios ^0.26.1

### Back-End
- Express ^4.16.4
- Nodemon ^2.0.10
- Axios ^0.26.1
- Body-Parser ^1.18.3
- Postgres ^8.7.3
- elephantSQL  