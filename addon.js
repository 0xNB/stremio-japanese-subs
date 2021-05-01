const { addonBuilder } = require("stremio-addon-sdk")

// Docs: https://github.com/Stremio/stremio-addon-sdk/blob/master/docs/api/responses/manifest.md
const manifest = {
	"id": "community.JapaneseSubs",
	"version": "0.0.1",
	"catalogs": [],
	"resources": [],
	"types": [],
	"name": "JapaneseSubs",
	"description": "Adds Japanese Subtitle Discovery Support to Stremio "
}
const builder = new addonBuilder(manifest)

module.exports = builder.getInterface()