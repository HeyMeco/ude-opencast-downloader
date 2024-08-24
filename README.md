# ude-opencast-downloader
## A fork of [rwth-opencast-downloader](https://github.com/MangelWare/rwth-opencast-downloader)

A Chrome extension to download videos available on the UDE OpenCast Paella server.

### Usage

1. When you are logged in your UDE Moodle click on the 'https://opencast.uni-due.de' Link with your video that you want to download.
2. Start the video and click on the extension icon.
3. The popup should show the available contents with their resolution. Click on one of the download buttons to start downloading the MP4 file.

### How does it work?

The extension doesn't do anything too involved, such as puzzling together pieces of the video.
Instead, links to the MP4 files are readily available, if you know where to look.

That is: `window.paella.player.videoContainer.sourceData[...].sources.mp4[...]`

The trickier thing is to extract this using a Chrome extension, as it usually doesn't allow direct access to the `window` object of the page, even with a content script.
Thus, the content script `opencast-inject.js` injects a second script `opencast-inject-inner.js` into the page itself by appending a `script` tag to the DOM, which sets some attributes with the needed data on the `body` element, and is removed afterwards.
This is done periodically every second.
