module.exports = async () => {
  const kvNamespace = await VIDEOINFO.get("NAMESPACE", "json");
  const videoKeys = await kvNamespace.list().keys;

  const videos = [];
  for (const key of videoKeys) {
    const value = await kvNamespace.get(key.name);
    if (value) {
      const video = JSON.parse(value);
     const date = new Date(video.kvtime); // 假设视频对象中有uploadDate字段
      video.id = key.name;
      video.year = date.getFullYear(); 
      video.month = String(date.getMonth() + 1).padStart(2, '0');
      video.day = String(date.getDate()).padStart(2, '0');
      videos.push(video);
    }
  }

  return videos;
};
