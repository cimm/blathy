> [!WARNING]
> This repository has been archived and is no longer actively maintained. Bugs and vulnerabilities are no longer fixed, so do not run this code without first verifying it and updating its dependencies yourself!

# Bláthy

A single-page offline-first responsive web application (a fancy way of saying it’s a website behaving as a mobile app) to monitor energy consumption at one’s home.

Each month or so I use Bláthy to record my electricity, gas, water, petrol and solar meters with my phone for which it generates nice graphs. The application runs fully offline, client-side and no data is stored outside of your device. This is great for privacy but means you need regular backups since there are no copies of the collected data.

To use Blàthy simply go to https://www.suffix.be/blathy and click the plus icon to add your first utility to track. The data is stored in your browser’s local storage so don’t forget to take backups (click the download icon)!

The application is named after [Ottó Titusz Bláthy](http://en.wikipedia.org/wiki/Otto_Blathy), the Hungarian co-inventor of the wattmeter.

## Development

Clone the git repository, install the [Node.js](https://www.npmjs.com/) packages and run the webpack-dev-server.

```
$ git clone https://github.com/cimm/blathy.git
$ cd blathy
$ yarn install
$ yarn run dev
```

Run `yarn run build` to generate the production JS and CSS bundles. Together with the other files in the [public](public) folder you have everything needed to run your own Blàthy.

Ideas and contributions welcome via [GitHub issues](https://github.com/cimm/blathy/issues)!

## History

This is the second iteration of this mini-website. It used to be a [jQuery Mobile ](https://jquerymobile.com/) frontend with a [Ruby on Rails](https://rubyonrails.org/) backend way back in 2010 but the application is too simple for a client-server architecture. I started a rewrite in [React](https://reactjs.org/), but never finished it, until Svelte gave me the excuse to pick it up again, hence Blàthy v2.

## License

Bláthy is open source, licensed under the [MIT license](LICENSE), built with the [Svelte](https://svelte.dev/) framework, uses the [Feather](https://feathericons.com/) icon collection with the [Happy Hues](https://www.happyhues.co/) color scheme.
