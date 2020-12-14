# Employee Summary
![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)

## Table of Contents
* [Description](#description)
* [Dependencies](#dependencies)
* [Usage](#usage)
* [Output](#output)
* [Tests](#tests)
* [Links](#links)
* [License](#license)

## Description
A node CLI that takes in user input about employees and generates an HTML webpage that displays summaries for each employee. The application will prompt the user for information about the team manager and then information about the team members. The user can input any number of team members, and they may be a mix of engineers and interns.

## Dependencies
The dependencies are, [jest](https://jestjs.io/) for running the provided tests, and [inquirer](https://www.npmjs.com/package/inquirer) for collecting input from the user. There is a `package.json`, the following commands should be run to install dependencies:

```bash
npm i
```

## Usage
Run the application by using the following command:
```bash
node app.js
```

The application prompts the user to build an engineering team consisting of one manager and any number of engineers and interns. Output is an HTML file `team.html` page in the `output` directory, that displays a nicely formatted team roster.

[![Employee Summary Walkthrough](./assets/emp_sum_wt.gif)](https://drive.google.com/file/d/1NQ9flVJs1hh7ZyP5N8TeQPLjaCPJfxVy/view)

## Output
Example of team.html output:
![Example Team Output](./assets/output_ex.jpg)


## Tests
Tests were provided to build out classes and are located in the test folder. The following commands should be run for testing: 
```bash
npm run test
```

## Links
* Github Link: https://github.com/SeattleSal/employee_summary

## License

MIT License

Copyright (c) [2020] [Sally Perez]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.