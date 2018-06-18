# Doggie Browser

A web application for browsing dog images by breed, using [Dog.CEO's](https://dog.ceo/) Dog API.

## Live Demo

- [Doggie Browser](https://tinuola.github.io/doggie-browser/)

## Local Installation

- Clone the project repo

```
$ git clone https://github.com/tinuola/doggie-browser.git
$ cd doggie-browser
$ npm install
$ live-server
```

### Tooling

- JavaScript
- jQuery _(dependency for Select2 plugin)_
- [Select2](https://select2.org/) _(for search/selection functionality)_
- [ScrollReveal](https://scrollrevealjs.org/)
- Live-Server _(for local development)_
- [GumGum Design System](http://ds.gumgum.com/stable/) _(for light styling: menu, image grid)_

### Features

- Dropdown menu
  - Scroll to browse breed list
  - Type breed name using autocomplete
  - Filter breeds
- Displays images and search result count
- Changing selected breed displays a new set of results
- Scroll to top function
- Mobile and tablet responsive
