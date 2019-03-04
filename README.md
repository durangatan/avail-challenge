# avail-challenge

## Features
- Potential tenents can enter their name and email to get a secure public link to a basic lease application.
- The link is secured via a unique token that is invalided when an applicant submits their application.
- Applicants can save their form and come back as many times as they like; however, if the "Full" form option is selected, social security numbers and mothers' maiden names will not be saved until the whole form is submitted.
- Applicants can delete their application at any time.
- Admins can see a flat list of all submitted applicants by logging in via the admin login form.
- The list of applicants is sortable by any of the given attributes. Click twice to change sort direction.
- Login state is persisted in a cookie. You can log out from the admin screen.
- Admins can toggle between the basic and full form type.
- All update and destroy actions have authorization scoped to their own entity.

## Tech

### Frontend
- React `^16.8.1` with Hooks
- Typescript
- React Router
- Styled Components

#### Backend
- Ruby on Rails
- Bcrypt
- Postgresql
- Action Model Serializers

## Development

create a .env file in the root directory of this repo and paste the following information, substituting your own values where necessary. Note that gmail addresses with 2FA enabled cannot be used as a `from` address, and that you may need to "enable less secure apps" in your gmail settings in order for the emails to actually send.

```
REACT_APP_API_URL=http://localhost:3000
PORT=3001
GMAIL_ADDRESS=<YOUR GMAIL ADDRESS>
GMAIL_PASSWORD=<YOUR GMAIL PASSWORD>
DB_HOST=db
DB_USERNAME=postgres
```

Make sure the docker daemon is running. If you don't have docker installed, you can download it [here](https://docs.docker.com/install/).

run `docker-compose up`. This command:

- creates 3 containers - 1 for the database, 1 for the Rails API, and 1 for the React app.
- creates, migrates, and seeds the database.

you should be able to visit localhost:3001 in your browser and see the app.

The seed file creates an admin user so you can peruse the site as an admin.

```
    email: admin@mail.com
    password: secret
```

I used trello to track my progress through the requirements of this challenge. you can find my trello board [here](https://trello.com/b/BgLcj4jn/avail-challenge) - it might give you a sense of the direction I would have headed if I had more time.
