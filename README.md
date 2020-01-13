# Bláthy

A simple single-page web application to monitor energy usage at one’s home. Each month or so I use this to record my electricity, gas, water, and solar meters for which it generates some nice graphs. The application runs fully client-side and no data is stored online. This is great for privacy but means the user needs to make regular backups since there are no copies of the collected data.

The application is named after [Ottó Titusz Bláthy](http://en.wikipedia.org/wiki/Otto_Blathy), the Hungarian co-inventor of the wattmeter.

## Setup

Bláthy is a single HTML file with a single JavaScript bundle (and soon some CSS). There is no need for a server, simply open the HTML page in a browser.

## Development

Clone the git repository, install the Node packages and run the webpack-dev-server.

```
$ git clone https://github.com/cimm/blathy.git
$ cd blathy
$ yarn install
$ yarn run dev
```

Run `yarn run build` to generate the production JS and CSS bundles.

## License

Bláthy is licensed under the [MIT license](LICENSE), ideas and contributions welcome.
