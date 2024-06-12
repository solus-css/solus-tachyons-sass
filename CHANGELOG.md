## Tachyons-Haru Change Log

## v0.0.1

Initial parity release with Tachyons v4.12.0

## v0.1.0

v0.1.0 sees a refactor away from @import to use @use/@forward instead. This is likely the last Tachyons v4.12.x parity release.

This release begins to diverge from Tachyons by removing some IE\* hacks, introducing some logical properties, and adding an accessibility fix for list elements.

Also:

- New generator mixins for custom props and classes are now in `scss/generators/*`
- Individual module mixins are now deprecated and moved to their own repo.
- All vars are now generated into custom properties with `:where(HTML)` for the lowest possible specificity.
- Class declarations now use these custom properties and have built-in fallback values.
- Experimental reset (nu-reset): <https://gist.github.com/bnjmnrsh/6ca113fb4e3577e27de2228f997daa79>
