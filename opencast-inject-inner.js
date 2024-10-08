(() => {
    try {
        let dataSources = window.paella.player.videoContainer.sourceData;
        dataSources.forEach(sd => {
            let { content } = sd;
            let mp4hrefs = sd.sources.mp4.map((s) => s.src).join('|');
            let resolutions = sd.sources.mp4.map((s) => `${s.res.w}x${s.res.h}`).join(',');
            document.body.setAttribute(`udeocdl_${content}_hrefs`, mp4hrefs);
            document.body.setAttribute(`udeocdl_${content}_res`, resolutions);
        });
        document.body.setAttribute('udeocdl_contents', dataSources.map(ds => ds.content).join(','));
    } catch (error) {
        document.body.setAttribute("udeocdl_contents", "not_loaded");
    }

})();