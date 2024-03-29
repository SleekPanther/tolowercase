# ~~.toLowerCase()~~ ⇒ tolowercase
A simple idea I came up with to and decided to run with when I saw the domain [tolowercase.com](https://www.tolowercase.com/) was available.

## Domain
- [x] Investigate porting domains to Hover
	- [x] Cost 325 to buy from hover, or 280 from Sav & 14.99 to transfer to Hover
- [x] Free/cheap hosting (GitHub Pages)
- [X] SSL/TLS certificates (needed for copy clipboard access)
	- [x] Github pages says it's https, so clipboard access should work
	- [x] Enabled DNS in Sav settings and certificate seems to work even though GitHub Pages settings says HTTPS is unavailable for this domain

## Hosting
-  ~~Sav.com~~
	- [x]  Used their custom website builder, no option for 3rd party hosting or direct file access. Can't create certificate if hosted somewhere else.
- Simple static web page
- React? Gatsby?
- Github Pages
	- [x] Connect custom domain (after purchase comes through)
	- [ ] move things back to folder, doesn't recognize /app but showed /docs even though it wasn't there
	- [ ] Investigate Github actions publishing
		- [x] Currently pushing to main, not using branch deployment

## MVP
- [x] Domain
	- [x] Purchased from Sav.com, waiting to connect with github
- [x] Some kind of hosting (github pages)
- [x] input box for text (hooked up to textchange event or paste)
	- [ ] input sanitization (not a big deal since it won't be invoked, but test escaping html)
	- [x] handling of initial state/null vs empty string so we can always call .toLowerCase()
		- [x] (Didn't seem to be an issue)
- [x] output box (readonly) to copy from

### Enhancements
- [x] Copy/paste button
	- [x] save permission, check on live site (Real certificate site doesn't keep asking for permissions, good)
- [ ] textarea toggle button? (hide with css or actually recreate?)
- [ ] investigate to locale
- [ ] CSS/bootstrap
- [ ] Instructions/hints
- [ ] Favicon
- [ ] Chrome Extension?
