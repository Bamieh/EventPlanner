## Udacity Event Planner Project
* Built using Polymer 1.0, through Polymer Starter Kit.
* Firebase is used to manage accounts and events.

### [Live Demo](https://udacity-eventplanner.firebaseapp.com/)

## Getting Started

1. Clone this repo.
2. Install npm and bower packages. (npm install and bower install).
3. To run the app locally:
```sh
gulp serve
```
4. To deploy app (dist folder):
```sh
gulp
```

## additional Details
Firebase Rules:
```json
{
  "rules": {
    "users": {
      ".write" : "auth !== null",
      "$uid": {
        ".read": "auth !== null",
        ".write": "auth !== null && auth.uid === $uid"
      }
    }
  }
}
```
Read is for all authenticated users, writes (creating new events, modifying account) only for user with matching uid.






