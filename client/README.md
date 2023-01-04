<!-- Frontend of Rent a Room -->

# Rent a Room

This frontend is built with React and Redux. It is a single page application that uses the React Router to navigate between pages. The application is built with the create-react-app tool.

## Getting started

To get started, clone the repository and run `npm install` to install all dependencies.

## Running the application

To run the application, run `npm start`. This will start the application on port 3000.

## Running the tests

To run the tests, run `npm test`. This will run all tests in the application.

## Building the application

To build the application, run `npm run build`. This will build the application and put the build files in the `build` folder.

## Deploying the application

To deploy the application, run `npm run deploy`. This will build the application and deploy it to the gh-pages branch. The application will be available at https://rent-a-room-frontend.herokuapp.com/.

## Deploying the application to Heroku

To deploy the application to Heroku, run `npm run heroku-deploy`. This will build the application and deploy it to Heroku. The application will be available at https://rent-a-room-frontend.herokuapp.com/.

## Deploying the application to Netlify

To deploy the application to Netlify, run `npm run netlify-deploy`. This will build the application and deploy it to Netlify. The application will be available at https://rent-a-room-frontend.netlify.com/.

## Deploying the application to Firebase

To deploy the application to Firebase, run `npm run firebase-deploy`. This will build the application and deploy it to Firebase. The application will be available at https://rent-a-room-frontend.firebaseapp.com/.

## Deploying the application to AWS

To deploy the application to AWS, run `npm run aws-deploy`. This will build the application and deploy it to AWS. The application will be available at https://rent-a-room-frontend.s3.amazonaws.com/index.html.

## Deploying the application to Azure

To deploy the application to Azure, run `npm run azure-deploy`. This will build the application and deploy it to Azure. The application will be available at https://rent-a-room-frontend.azurewebsites.net/.

## Deploying the application to Google Cloud

To deploy the application to Google Cloud, run `npm run google-cloud-deploy`. This will build the application and deploy it to Google Cloud. The application will be available at https://rent-a-room-frontend.appspot.com/.

## How it works

This frontend consumes the Rent-A-Room API. The API is available at http://localhost:5000 and https://rent-a-room-api.herokuapp.com/. The API is documented at https://rent-a-room-api.herokuapp.com/docs.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

[]: # Path: client\src\actions\index.js

[]: # Path: client\src\actions\rooms.js
import axios from 'axios';

import { FETCH_ROOMS, FETCH_ROOM, DELETE_ROOM, FETCH_ROOMS_BY_USER } from './types';

const ROOT_URL = 'http://localhost:5000/api';

export function fetchRooms() {
const request = axios.get(`${ROOT_URL}/rooms`);

return {
type: FETCH_ROOMS,
payload: request
};
}

export function fetchRoom(id) {
const request = axios.get(`${ROOT_URL}/rooms/${id}`);

return {
type: FETCH_ROOM,
payload: request
};
}

export function fetchRoomsByUser(id) {
const request = axios.get(`${ROOT_URL}/rooms/user/${id}`);

return {
type: FETCH_ROOMS_BY_USER,
payload: request
};
}

export function deleteRoom(id, callback) {
const request = axios.delete(`${ROOT_URL}/rooms/${id}`)
.then(() => callback());

return {
type: DELETE_ROOM,
payload: id
};
}

[]: # Path: client\src\actions\users.js

[]: # Path: client\src\components\auth\auth_required.js
import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function(ComposedComponent) {
class Authentication extends Component {
static contextTypes = {
router: React.PropTypes.object
}

    componentWillMount() {
      if (!this.props.authenticated) {
        this.context.router.push('/');
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        this.context.router.push('/');
      }
    }

    render() {
      return <ComposedComponent {...this.props} />
    }

}

function mapStateToProps(state) {
return { authenticated: state.auth.authenticated };
}

return connect(mapStateToProps)(Authentication);
}

[]: # Path: client\src\components\auth\require_admin.js
import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function(ComposedComponent) {
class Authentication extends Component {
static contextTypes = {
router: React.PropTypes.object
}

    componentWillMount() {
      if (!this.props.authenticated || !this.props.admin) {
        this.context.router.push('/');
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated || !nextProps.admin) {
        this.context.router.push('/');
      }
    }

    render() {
      return <ComposedComponent {...this.props} />
    }

}

function mapStateToProps(state) {
return { authenticated: state.auth.authenticated, admin: state.auth.admin };
}

return connect(mapStateToProps)(Authentication);
}

[]: # Path: client\src\components\auth\sign_in.js
