const groupVideosBySite = videos => {
  return videos.reduce((allVideos, video) => {
    const { site } = video;
    if (!allVideos[site]) allVideos[site] = [];
    allVideos[site].push(video);
    return allVideos;
  }, {});
};

const groupVideosByType = videos => {
  return videos.reduce((allVideos, video) => {
    const { type } = video;
    if (!allVideos[type]) allVideos[type] = [];
    allVideos[type].push(video.key);
    return allVideos;
  }, {});
};

export const groupVideos = videos => {
  const groupedVideos = groupVideosBySite(videos);
  for (let [site, siteVideos] of Object.entries(groupedVideos)) {
    groupedVideos[site] = groupVideosByType(siteVideos);
  }

  return groupedVideos;
};

export const getVideoSites = videos => {
  const sites = videos.reduce((allSites, video) => {
    if (!allSites.includes(video.site)) allSites.push(video.site);
    return allSites;
  }, []);

  return sites;
};

export const getVideoTypes = videos => {
  const types = videos.reduce((allSites, video) => {
    if (!allSites.includes(video.type)) allSites.push(video.type);
    return allSites;
  }, []);

  return types.sort().reverse();
};
