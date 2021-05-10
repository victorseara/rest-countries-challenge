# REST Countries API with color theme switcher

[![CI](https://github.com/victorseara/countries-rest-api-with-theme-switcher/actions/workflows/main.yml/badge.svg)](https://github.com/victorseara/countries-rest-api-with-theme-switcher/actions/workflows/main.yml) ![COVERAGE](./coverage/badge.svg)

## TLDR

This is my solution for the REST Countries API with color theme swicher by [Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca) made it with React. With this challenge I wanted to added more tools to my utility belt and explore topics like performance and acessibility.

You can check it out the result [here](https://victorseara.github.io/rest-countries-challenge).

### Running locally

```
git clone https://github.com/victorseara/rest-countries-challenge.git
cd rest-countries-challenge
yarn && yarn start
```

### Stack

- React + Typescript
- TailwindCSS
- Jest + React Testing Library
- Eslint + Prettier + Husky
- Github Actions + Github Pages

### Features

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode _(optional)_

### How I build it

Before start to code, I brought all the requirements to a [GitKraken board](https://app.gitkraken.com/glo/board/YIRovYynhAASUbb_) and broked it all into smaller parts, this help me a lot to organize what I had to do and get a clear vision about how to approach each problem.

Then I bootstrap the project using CRA and did some tweaks like linters and test configuration. Added husky to help me with CI and setup Github Pages for continuous deployment.

I started to code by the components. Used a inside / outside approach, wich means that atomic components was the first to be builded and then composed into larger components, pages etc.[TailwindCSS](https://github.com/tailwindlabs/tailwindcss) made it pretty straight foward, they provide a very simple API, a smoothly learning curve and a first class documentation.

After all layout parts are done I needed to integrate with [REST Countries API](https://restcountries.eu/), for that I choosed [axios](https://github.com/axios/axios) as HTTP client and [msw](https://github.com/mswjs/msw) to mock the requests on development and test environment. Use msw was a game change for me, had great DX using it in this project. Can't wait to bring it to my professional work to.

### Some important notes

_$0,02 on Performance_

A challenge there is not very clear looking only to the requirements is performance. We need to show all countries and their pictures soon as user reach the first page. This lead us to performance issues like a too large time to begin interactive. To address this problems I made something like a virtualized list, where items are painted on the screen soon as they became visible. This solves the issue partially because all images was still downloaded on intial rendering. The solution for this second problem was apply lazy load to images. I used a lib called [react-cool-img](https://github.com/wellyshen/react-cool-img) for this job and it was a perfect fit.

_$0,02 on Accesibility_

Decrease the barriers that UI impose to users is a challenge that all devs should embrace. Thinking of this, I made my best effort to use the most semanticaly markup I could and ensure that keyboard-only users can interact with the application without struggling with controls that doesn't work.

### Let me know what you think

Feel free to reach me if you are curious about something specific about this challenge or to provide some guidance if your are doing this challenge to, I'll be glad to help.

Any problems you find or suggestions to improve it are welcome, use the _issues_ panel for this.
