# Introduction

## Core Engineering Practices Shapes exercise

To start, run through the "Getting Started" steps below for either Java or Javascript (whichever you are most comfortable working with).

When everything is installed and you have a failing test, you are ready to pair up and work on the next steps. Fixing the test is part of the workshop, we will go through it together.

_This workshop assumes that you're using a Macbook. Steps will vary for Windows and Linux users._

# Getting Started: Java

First, you will need:

- Java 8 or later
  - `brew install openjdk`
- A Java IDE (like IntelliJ)
  - `brew install --cask intellij-idea-ce`
- gradle
  - `brew install gradle`

Clone this repository, then use `gradle` to build the project. You should see a single test failure.
```sh
$ cd path/to/cep-shapes
cep-shapes$ gradle build
```

# Getting Started: Javascript

First, you will need:

- Node.js 10 or newer
  - `brew install node`
- A Javascript IDE (like Visual Studio Code)
  - `brew install --cask visual-studio-code`

Clone this repository, then use `npm` to build the project. You should see a single test failure.
```sh
$ cd path/to/cep-shapes
cep-shapes$ npm install
cep-shapes$ npm test
```
