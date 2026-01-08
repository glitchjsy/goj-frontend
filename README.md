# goj-frontend
[![Hits](https://hitcount.dev/p/glitchjsy/goj-frontend.svg)](https://hitcount.dev/p/glitchjsy/goj-frontend)  
A frontend framework for creating Government of Jersey style websites.

## What is this?
goj-frontend is a lightweight CSS framework loosely based on the current gov.je stylesheet and inspired by govuk-frontend.

It introduces a range of enhancements, including new components and improvements to existing ones. The framework removes the dependency on Bootstrap, offers modern and accessible styling, and is fully responsive for mobile devices. All CSS classes are prefixed with goj-, making it easy to adopt gradually alongside existing styles.

## Why?
I'm a big fan of open source. I'm also not a fan of how the Government is does not develop in the open (if anything is developed nowdays, doesn't seem like it!). For an island this small with [world leading digital infrastructure](https://www.digital.je/choose-jersey), it seems like we are falling behind. [Here are a few examples](https://imgur.com/a/TvjCsvq).

This project is an attempt to show how things could look - especially the React library which enables rapidly creating prototypes within a matter of minutes. I'm just one person doing this when I have some free time, imagine what could be created with a full team...

## Repo structure
Everything is stored in the `packages` directory.

#### `core`
This contains the SCSS framework that *is* `goj-frontend`.

#### `react`
This contains a React library that defines reusable components that use the SCSS framework.

#### `docs`
This is a documentation website that includes examples and demos of the project.

#### `test`
This contains some html pages used for testing.