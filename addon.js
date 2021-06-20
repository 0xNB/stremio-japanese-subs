const { addonBuilder } = require("stremio-addon-sdk")
const { subsExistForFileName } = require("sub_to_id_mapper")

// Docs: https://github.com/Stremio/stremio-addon-sdk/blob/master/docs/api/responses/manifest.md
const manifest = {
	"id": "community.japanesesubs",
	"version": "0.0.1",
	"catalogs": [],
	"resources": [ "subtitle" ],

	"types": [ "movie", "series"],
	"name": "JapaneseSubs",
	"description": "Adds Japanese Subtitle Discovery Support to Stremio "
}

const builder = new addonBuilder(manifest)

function hasSubtitlesForFileName(string) {
	return subsExistForFileName(string);
}

builder.defineSubtitlesHandler(function(args) {

	const subsExist = hasSubtitlesForFileName(args.extra.filename);
	if(!subsExist) {
		// file id does not exist on any indexer, return nothing
		return Promise.resolve({subtitles: []});
	}

	// we have subtitles for this file online somewhere

	const subtitles = getSubtitlesForName(args.extra.filename)
	return Promise.resolve({subtitles});
})

module.exports = builder.getInterface()