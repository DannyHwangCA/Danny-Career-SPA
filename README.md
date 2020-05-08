# Danny MyInfo SPA

A React SPA site to host information about me!

Hosted on Netlify: https://dannyhwang.netlify.app/

## About This SPA

This SPA renders a single unique component for each Nav topic. Below notes some techniques used.

## Navigation
1. Each Nav button uses an imported FontAwesome SVG and CSS3 hover and transition effect.
2. Each nav button uses an onClick event passed from state to props that "setState" a unqiue state object.
3. A simple ternary is used to determine if the component is rendered or not rendered.

## Projects
1. Each Nav button uses an imported FontAwesome SVG and CSS3 hover and transition effect.
2. Each nav button uses an onClick event passed from state to props that "setState" a unqiue state object.
3. A simple ternary is used to determine if the component is rendered or not rendered.

## Projects
1. Fetches a projects.json that is processed into an array as state.projectArray.
2. projectArray state is passed as a prop and processed into projects list using map.
3. Project images imported from images folder and required for webpack.

## About & Contact
1. Uses Flexbox positioning to make responsive dual containers.
2. Imports FontAwesome Brand SVGs and files into flexbox responsive containers.
