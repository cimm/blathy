# Bláthy

A personal iPhone web application to monitor my energy usage. This application should help me to write down the current energy meters in the house at the beginning of each month: water, electricity, solar power and gas.

## Naming

The application is named after [Ottó Titusz Bláthy](http://en.wikipedia.org/wiki/Otto_Blathy), the Hungarian co-inventor of the watt meter.

## Setup

Bláthy is designed to run on Heroku. There are a few parameters it needs to be happy.

    heroku config:add USER_MAIL=me@example.com
    heroku config:add SECRET_TOKEN=some_random_string

Don't forget to activate the following free Heroku addons:

  - Nightly Cron
  - Sendgrid Free
  - Single Bundle (optional)

## Ideas to implement

- A crontab that sends an e-mail at the beginning of each month.
- Reporting functionality.
- Compare last month with the same month last year.
- Make this a hosted application with multiple users.

## Interested?

Feel free to get in touch via [www.suffix.be](http://www.suffix.be) if you want more info.

## License

All code is available under the MIT license, feel free to use it. Special thanks to the JQuery and jQTouch frameworks.
