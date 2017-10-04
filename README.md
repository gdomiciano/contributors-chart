# contributors-chart

> Responsive application, that user can search for a repository and see contributions per user in a chart.

## Introduction

This project is a code challenge that has been developed with [Vue.js](https://vuejs.org/) and [Nuxt.js](https://nuxtjs.org/) to cover the SSR, it is also preconfigured to work as a PWA.
The application is integrated with [GitHub API](https://developer.github.com/v3/), it consists on a typeahead field that receives the github username and suggests it respective repositories for selection, once the user selects one of the repositories suggesteds, its possible to visualize a chart - based on [vue-chartjs](https://github.com/apertureless/vue-chartjs) - that shows contributions per user in the selected repository. In case the user does not exist or has no repositories available an error message is shown.

![Image](https://raw.githubusercontent.com/gdomiciano/contributors-chart/develop/assets/screenshots/1.png)
![Image](https://raw.githubusercontent.com/gdomiciano/contributors-chart/develop/assets/screenshots/2.png)
![Image](https://raw.githubusercontent.com/gdomiciano/contributors-chart/develop/assets/screenshots/3.png)
![Image](https://raw.githubusercontent.com/gdomiciano/contributors-chart/develop/assets/screenshots/4.png)
![Image](https://raw.githubusercontent.com/gdomiciano/contributors-chart/develop/assets/screenshots/5.png)


## Install

- Clone the project: `git clone https://github.com/gdomiciano/contributors-chart.git`
- Go to project's folder: `cd contributors-chart`
- Install dependencies: `npm i` or `yarn`

## Usage
To run this project locally:

- Execute `npm run dev` or `yarn dev`
- Access [localhost:3000](http://localhost:3000)

## About the application
**Base framework:**
I have chosen to build this application based on [Nuxt.js PWA version](https://github.com/nuxt-community/pwa-template), due to I really believe that [PWA](https://developers.google.com/web/progressive-web-apps/) is going to be the future of web applications considering the advantages, such as:

- Add website to homescreen adn run it as a mobile app;
- Offline availability;
- size, the PWA will always be lighter than a mobile app, so it has less chance to be uninstalled;
- Service worker will be available on Safari on December, 2017;
- Successfull cases (e.g. [Aliexpress](https://developers.google.com/web/showcase/2016/aliexpress), [Flipkart](https://developers.google.com/web/showcase/2016/flipkart) et cetera);

Beyond the PWA feature, I have started this development with Nuxt.js to cover the SSR (Server Side Rendering), which means the page will be availabe for SEO ad still being a SPA, and this part is covered by Vue.js framework.

**Responsivinesses:**
This application was developed with mobile first.

**Typeahead:**
I have decided to develop this feature from scratch, actually just to challenge myself, since I have never done something alike, even though it costs the time of implement tests. The typeahead field contains a debounce custom directive, that waits 500ms after the user stop typing to call the github API and then show the suggestions. The choice of debounce over throttle was based on my previous knowledge on angular debounce directive.

Once the user finish typing, and the suggestion list appears, s/he can navigate among them via arrow down/up keys and select one pressing enter or scrolling the list via touch move/mouse and select with click/touch event according to the device.

*I did not use <Datalist> tag for the typeahead, due to the lack of support on Safari.*

**Chart/Graph:**
Usually implement chart from scratch is really complex, so I took a look on all available chart integrations availables on [Awesome Vue Repository](https://github.com/vuejs/awesome-vue) and I decided to implement [Vue-chartjs](https://github.com/apertureless/vue-chartj) owing to the cross-browser support, it is resizable and easy to integrate, specially with Nuxt.js, because some plugins/integrations are impossible to get working with SSR.

**Components:**
There are components in the whole application, the communication between components is going through events, furthermore I have created a Vuex Store to keep the data updated for the whole application, such as the list of repositories, the chart info and the error messages, all the resquests are executed via actions and saved on a state that is easily accessed into the application scope.


## Required features
**Basic version:**

- [x] Create a search field with a (repo) typeahead, where user can type any github username and the search would return the list of users github repos
- [x] User can then select a repo from the typeahead dropdown and the app should display a graph of contributions per user for this repo (x axis users, y axis number of contributions)
- [x] Make sure to handle the case, when username does not exist or user has no repos

**Fancy version:**

- [x] Use ECMAScript 6
- [-] Make it look nice design wise

**Additional info:**

- [x] API endpoints needed (repos and contributors) - e.g.: https://api.github.com/users/angular/repos, https://api.github.com/repos/angular/angular/contributors
- [ ] Feel free to use any other open API, that could make the assignment better/easier

**General guidelines:**

- [x] Project should be build with one of the Javascript frameworks/libraries of your choosing
- [-] The code should be readable and clearly commented when needed
- [x] The project should be pushed to a public github repository
- [x] You can use all the open source libraries you need
- [x] README.md should contain project documentation (how to run and build the project locally from scratch, project structure, gotchas,... anything worth mentioning)
- [-] The project should support IE10+, Android native browser 4.4+ and all modern browsers (current version - 1)
- [x] The UI should be responsive
- [x] HTML should be semantic


## To Do

During the development I have created a [Github Projects](https://github.com/gdomiciano/contributors-chart/projects/1) to Kanban Board to organize my development process:

- **Backlog**: indicates features/improvements that will be developed after the MVP
- **ToDo**: show all features have to be delivered for the MVP
- **In Progress**: tasks that are being developed
- **Done**: expose all tasks that are developed and tested.


![Image](https://raw.githubusercontent.com/gdomiciano/contributors-chart/develop/assets/screenshots/github-project.png)