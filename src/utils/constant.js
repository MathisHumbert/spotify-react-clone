const client_id = '1d8143ad38984e14aa13a95403f1a3e7';
const base_url = 'https://accounts.spotify.com/authorize';
const redirect_url = 'http://localhost:3000/webapp';
const scope =
  'user-read-currently-playing user-read-playback-state user-read-recently-played playlist-read-private user-top-read';

export const url = `${base_url}?response_type=token&client_id=${client_id}&scope=${scope}&redirect_uri=${redirect_url}&show_dialog=true`;

export const recently_played_tracks_endpoint = '/me/player/recently-played';
export const get_user_playlist_endpoint = '/me/playlists';
export const get_user_top_artists = '/me/top/artists';
export const get_user_top_tracks = '/me/top/tracks?time_range=long_term';
