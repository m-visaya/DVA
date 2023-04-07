export const fireNotification = (title, body, icon, sound) => {
  window.electronAPI.fireNotification({
    body: body,
    icon: icon,
    title: title,
    sound: sound,
  });
  sound ? audio.play() : null;
};

export const addLog = (channel, type, origin, frameDataURL, frameCount, timestamp) =>  {
  window.electronAPI.addLog({
    channel: channel,
    type:  type,
    origin: origin,
    frameDataURL: frameDataURL,
    frameCount: frameCount,
    timestamp: timestamp,
  });
}
