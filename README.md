# fusion-service

This project is a basic contact book written in Django (v2.1) and Vue.js (v2.5.17). We use docker-compose to access the database (Postgres).

This README assumes basic knowledge of Docker and packager managers (yarn and pip) for the dependencies. You need `docker-compose` installed to run the database or you can set it manually using any other tools, just rememeber to update the `settings.py` on `fusion_service`. We also assume you have a virtualenv for your python environment and it is already activated.

Install the dependencies.

1. For Vue, run: `yarn`
2. For Django, run `pip install -r requirements.txt`

Copy the `.env.default` to `.env` and set the keys accordingly.

Start the database and run the migrations:

1. Run `docker-compose up` (this may take a while on the first time)
2. On another terminal, run `./manage.py migrate` to apply the migrations to your database

Run the servers with the following commands:

1. Vue: `yarn serve`
2. Django: `./manage.py runserver`
3. Database (if you killed it on the previous step): `docker-compose up`
