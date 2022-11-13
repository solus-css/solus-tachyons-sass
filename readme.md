# tachyons-haru (Sass)

Transpiled Sass partials for Tachyons.

## Installation

```javscript
npm install https://github.com/tachyons-haru/tachyons-haru
```

## Basic Usage

```scss
@import "path/to/tachyons.scss";
```
## Tachyons-Haru
The aims of Tachyons-Haru are to leverage the tooling of Sass in much the same way [tachyons-css](http://tachyons.io/) utilises PostCSS, thus enabling with Sass the generation of custom breakpoints and variable definitions when generating Tachyons partials. While there is a [tachyons-sass](https://github.com/tachyons-css/tachyons-sass) variant from which this project is forked, it does not fully leverage the potential of Sass, and has lagged behind in features.

Tachyons-Haru breaks from the Tachyons parent project by combining [CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*) with Sass varriables, so they can be used interoperably within your projects. These features allow Tachyons measurement scales and structure to be used to provide uniformity (for example when also using BEM) while leaving the option to generate only the Tachyons partials required. This is benificicial when migrating to or away from Tachyons in your project or when you just want just a sprinkle of Tachyons.

## Custom CSS Properties

Tachyons-Haru includes custom CSS properties for colors and all unit based values, where the name for each property matches its Sass varriable couterpart.

For example the [spaceing values](http://tachyons.io/docs/layout/spacing/) for `margin-all` (ie `.ma3`) are governed by the CSS custom property: `var(--spacing-medium)` which corrisponds to the Sass variable `$spacing-medium`.

Custom CSS properties are defined in `*-vars.scss` files that appear allong side the partial definitions for that group, while global Sass variables are found in `_all_variables.scss`.

## Sass variables

Tachyons-Haru has Sass variables and mixins to genteate each of Tachyons' utility classes. Sass variable names are identical to their custom property counterpart, a pattern established by [tachons-sass](https://github.com/tachyons-css/tachyons-sass) from which this project is forked. See also [tachyons-custom](https://github.com/tachyons-haru/tachyons-custom) which offeres a near identical suite of custom variables, with the noteable exception of properties related to colors [ie skins](https://github.com/tachyons-haru/tachyons-custom/blob/master/src/_variables.css), where [tachyons-custom](https://github.com/tachyons-haru/tachyons-custom) has a greatly expanded color property set, diverging from the parent project.

Sass global variables are defined in the file `_all_variables.scss`.

## Sass Mixins

Each Tachyons partial group utilises a matched collection of mixins. Mixins are defined in `*-mixins.scss` files where the mixin name is the same to the Tachyons class name:

```scss
@include ma3;  // .ma3
```

## Custom Breakpoints

Breakpoints and their utility class prefixes are defined in `_all_variables.scss`.

Adding a new breakpoint can be done as follows:

```scss
// Custom Media Query Variables
$my-super-small-breakpoint: 'screen and (min-width: 15em)' !default;
$breakpoint-not-small: 'screen and (min-width: 30em)' !default;
$breakpoint-medium: 'screen and (min-width: 30em) and (max-width: 60em)' !default;
$breakpoint-large: 'screen and (min-width: 60em)' !default;

$breakpoints: (
  '': '', // required
  'ss':$my-super-small-breakpoint,
  'ns': $breakpoint-not-small,
  'm': $breakpoint-medium,
  'l': $breakpoint-large
) !default;
```

> NOTE: Be minfull that adding arbitrary breakpoints can baloon the overall size of your compiled CSS as each suite of utility classes will be generated for every breakpoint.

## A note on colors values

Due to their general flexability, especially with animations, this project has chosen to use equiviliant `hsl` or `hsla` colors instead of Tachions origional hex colors.

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
