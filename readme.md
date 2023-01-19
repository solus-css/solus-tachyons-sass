# tachyons-sass-haru

Tachyons Sass partials.

Tachyons-Haru aims to leverage the tooling of Sass in the same way [tachyons-css](http://tachyons.io/) utilises PostCSS, thus enabling the creation of custom breakpoints and variable definitions when generating Tachyons modules with Sass. While there is a [tachyons-sass](https://github.com/tachyons-css/tachyons-sass) variant from which this project is forked, it does not fully leverage the potential of Sass.

Tachyons-Haru breaks from the Tachyons parent project by integrating [CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*) alongside Sass variables definitions so that they can be used interchangeably within your projects. These features allow Tachyons scales and structure to be selectively used to provide uniformity in a project (for example, when using BEM methodology) while also allowing the option of generating selected Tachyons partials when you want to add "just a sprinkle" of Tachyons. These features are beneficial when using hybrid authoring approaches and migrating to or away from Tachyons.

## Local Setup

To develop locally with Tachyons-Haru

```bash
git clone https://github.com/tachyons-haru/tachyons-sass-haru.git
cd tachyons-sass-haru
npm install
```

Or as an NPM dependency:

```bash
npm i https://github.com/tachyons-haru/tachyons-sass-haru
```

### Basic Usage

```scss
@import "path/to/tachyons.scss";
```

### Development options

If you want to just use everything in tachyons/sass as a jumping off point and edit all the code yourself, you can compile all of your wonderful changes by running:

```npm start```

This will output both minified and un-minified versions of the CSS to the CSS directory and watch the sass directory for changes.
It's aliased to the command:

```npm run build:watch```

If you'd like to just build the CSS once without watching the sass directory, run:

```npm run build```

If you want to check that a class hasn't been redefined or 'mutated,' there is a linter to check that all of the classes have only been defined once. This can be useful if you are using another library or have written some of your own CSS and want to make sure there are no naming collisions. To do this run the command:

```npm run mutations```

Stylelint can be used to lint generated css after a `build` command by running the command:

```npm run lint:css```

Tachyons-sass-haru is bunnedled with [wallace-cli](https://github.com/projectwallace/wallace-cli). After a build, you can generate a report of useful statistics about your CSS in your terminal by running the command:

```npm run wallace```

## Custom CSS Properties

Tachyons-Haru includes custom CSS properties for colors and all unit based values, where the name for each property matches its Sass variable counterpart.

For example the [spacing values](http://tachyons.io/docs/layout/spacing/) for `margin-all` (ie `.ma3`) are governed by the CSS custom property: `var(--spacing-medium)` which corresponds to the Sass variable `$spacing-medium`.

Custom CSS properties are defined in `*-vars.scss` files that appear along side the partial definitions for that group, while global Sass variables are found in `_all_variables.scss`.

## Sass

Tachyons-sass-haru uses variables and mixins to construct Sass partials for each Tachyons module.

### Sass Variables

 Sass variable names are identical to their custom property counterpart, a pattern established by [tachons-sass](https://github.com/tachyons-css/tachyons-sass) from which this project is forked. See also [tachyons-custom](https://github.com/tachyons-haru/tachyons-custom) which offers a near identical suite of custom variables, with the notable exception of properties related to colors [ie skins](https://github.com/tachyons-haru/tachyons-custom/blob/master/src/_variables.css), where [tachyons-custom](https://github.com/tachyons-haru/tachyons-custom) has a greatly expanded color property set, diverging from the parent project.

Sass global variables are defined in the file `_all_variables.scss`.

### Sass Mixins

Each Tachyons module utilises a matched collection of Sass mixins. Mixins are defined in `*-mixins.scss` files where the mixin name is the same as the Tachyons class name:

```scss
@include ma3;  // .ma3
```

### Custom Breakpoints

Breakpoints and their utility class prefixes are defined in `_all_variables.scss`. The mixin that does the heavy lifting can be found in `_breakpoint_gen_mixin.scss`.

Adding or tweaking breakpoints can be done by modifying the key:value pairs of the `$breakpoints` map found in `_all_variables.scss`:

```scss
// Custom Media Query Variables
$my-super-small-breakpoint: 'screen and (min-width: 15em)' !default;
$breakpoint-not-small: 'screen and (min-width: 30em)' !default;
$breakpoint-medium: 'screen and (min-width: 30em) and (max-width: 60em)' !default;
$breakpoint-large: 'screen and (min-width: 60em)' !default;

$breakpoints: (
  '': '', // required
  'ss': $my-super-small-breakpoint,
  'ns': $breakpoint-not-small,
  'm': $breakpoint-medium,
  'l': $breakpoint-large
) !default;
```

> NOTE: Be mindful when adding arbitrary breakpoints as these will balloon the overall size of your compiled CSS, as each suite of Tachyons utility classes will be generated for every breakpoint.

## Differences between Tachyons and Tachyons-Haru

Where backwards compatibility is no longer a concern, we have begun removing or augmenting styles and rules that have either been deprecated or where modern tools and techniques are available.

### Tooling

This project has adopted a few tools to speed build times, and reduce cognitave overhead. These include [dart-sass](https://www.npmjs.com/package/sass), for new Sass features, as well as and [stylelint](https://www.npmjs.com/package/stylelint), and [prettier](https://www.npmjs.com/package/prettier) for code formatting. Because there doesn't appear to be a perfect configureation which will follow Tachyons formatting conventions  –– we decided not to bikeshed about it and just let Stylelint+Prettier do that work.

### Color

Due to their flexibility, especially with animations, this project has chosen to use `hsl` and `hsla` color values instead of `hex`.

### IE6,7,8

Where backwards compatibility is no longer a concern, we have begun removing the styles that target older versions  of IE. Fortunately, these are few and far between:

- Reference to `<command>` element removed from `_debug.sass`.
- `_clears.sass` currently uses [Nicolas Gallagher's](http://nicolasgallagher.com/micro-clearfix-hack/) clearfix hack. As most layouts no longer use floats, this module be removed from many projects.
- `_visibility.scss` provides an accessable way to hide content using `.clip`, which in turn uses an underscore hack that targets IE6 and below.

## License

MIT

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

Tachyons by [@mrmrs_](https://twitter.com/mrmrs_) & [@4lpine](https://twitter.com/4lpine)
Tachyons-Haru by [bnjmnrsh](https://github.com/bnjmnrsh)
