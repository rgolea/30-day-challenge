const keysContainer = document.querySelector<HTMLDivElement>('.keys');
const audioContainer = document.querySelector<HTMLDivElement>('.audio');

if(!keysContainer || !audioContainer) throw new Error('No keys or audio container found');

document.addEventListener('keydown', (e) => {
  const key = e.key.toUpperCase().charCodeAt(0);
  const audio = audioContainer.querySelector<HTMLAudioElement>(`audio[data-key="${key}"]`);
  const keyElement = keysContainer.querySelector<HTMLDivElement>(`div[data-key="${key}"]`);
  if(keyElement) {
    keyElement.classList.add('playing');
  }
  if(audio) {
    audio.currentTime = 0;
    audio.play();
  }
});

const keys = document.querySelectorAll<HTMLDivElement>('.key');

keys.forEach((key) => {

  key.addEventListener('transitionend', (e) => {
    if(e.propertyName !== 'transform') return;
    const el = e.target as HTMLDivElement;
    if(el.classList.contains('playing')){
      el.classList.remove('playing');
    }
  });
});

export {};
