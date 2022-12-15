import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

// const player = new Player('handstick', {
//   id: 19231868,
//   width: 640,
// });

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
player.setCurrentTime(localStorage.getItem(`setCurrentTime(|)`) || 0);

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay({ seconds }) {
  localStorage.setIte, (`videoplayer-current-time`, seconds);
}
