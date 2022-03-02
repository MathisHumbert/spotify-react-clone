const client_id = '1d8143ad38984e14aa13a95403f1a3e7';
const base_url = 'https://accounts.spotify.com/authorize';
const redirect_url = 'http://localhost:3000/webapp';
const scope =
  'user-read-currently-playing user-read-playback-state user-read-recently-played';

export const url = `${base_url}?response_type=token&client_id=${client_id}&scope=${scope}&redirect_uri=${redirect_url}&show_dialog=true`;

export const recently_played_tracks_endpoint =
  'https://api.spotify.com/v1/me/player/recently-played';
