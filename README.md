# lucasjs.github.io
My Website

## Stack

- Task Runner: [Gulp](http://gulpjs.com/)
- CSS Preprocessor: [Stylus](http://stylus-lang.com/)
- JS Transpiler: [Babel](https://babeljs.io/)

## Run the project locally

**1 -** Prepare the environment:
```sh
$ npm install -g gulp-cli
```

**2 -** Clone the project and install the dependencies:

```
$ git clone https://github.com/lucasjs/lucasjs.github.io
$ cd lucasjs.github.io
$ npm install
```
**3 -** Run static server and livereload:

```
$ gulp server
```

## Folders

	.
	├── README.md
	├── LICENSE.md
	├── build/
	├── src/
	|   ├── img/
	|   ├── js/
	|   |   └── script.js
	|   ├── styles/
	|   |   └── style.styl
	|   └── views
	├── gulpfile.js
	├── package.json
	└── .gitignore