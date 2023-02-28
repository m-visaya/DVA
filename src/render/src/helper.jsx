export const fireNotification = (title, body, icon, sound) => {
  window.electronAPI.fireNotification({
    body: body,
    icon: icon,
    title: title,
    sound: sound,
  });
  sound ? audio.play() : null;
};
