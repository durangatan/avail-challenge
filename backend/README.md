# README

Codebase for an e-commerce JSON API built with Ruby On Rails.

This repo is set up to run using Docker Compose. To run it locally

1. Add .env file provided by me (can email me to ask for one)

2. Make sure you have the Docker Daemon running.

3. Run `docker-compose up` to generate two containers; one contains the API and one contains the DB itself. This command will also create, migrate, and seed the database with seed data.




to check local postgres info:

 `ps auxwww | grep postgres` gives you port info

 `pg_ctl status` gives you local postgres info
