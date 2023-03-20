export const fireNotification = (title, body, icon, sound) => {
  window.electronAPI.fireNotification({
    body: body,
    icon: icon,
    title: title,
    sound: sound,
  });
  sound ? audio.play() : null;
};

export const addLog = (channel, type, origin, imageDataURL) =>  {
  window.electronAPI.addLog({
    channel: channel,
    type:  type,
    origin: origin,
    imageDataURL: imageDataURL,
  });
}
