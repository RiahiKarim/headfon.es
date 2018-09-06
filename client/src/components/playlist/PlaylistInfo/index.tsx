import * as React from 'react';
import './style.css';
import { playAlbum } from '../../../store';

interface Props {
  playlist: Playlist;
}

class PlaylistInfo extends React.PureComponent<Props, {}> {
  public render() {
    const { playlist } = this.props;
    const {
      images: [{ url: playlistUrl }],
      name,
    } = playlist;

    return [
      <img className="playlist-cover" key="playlist-cover" src={playlistUrl} />,
      <span className="playlist-name" key="playlist-name">
        {name}
      </span>,
      <button onClick={this.playPlaylist} key="play-playlist">
        Play Playlist
      </button>,
    ];
  }
  private playPlaylist = () => {
    const { playlist } = this.props;
    playAlbum(playlist);
  };
}

export default PlaylistInfo;
