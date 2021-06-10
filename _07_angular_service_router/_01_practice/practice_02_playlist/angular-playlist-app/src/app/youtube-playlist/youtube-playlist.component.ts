import { Component, OnInit } from '@angular/core';
import { Song } from '../model/song';
import { SongService } from '../service/song.service';

@Component({
  selector: 'app-youtube-playlist',
  templateUrl: './youtube-playlist.component.html',
  styleUrls: ['./youtube-playlist.component.css']
})
export class YoutubePlaylistComponent implements OnInit {
  playlist: Array<Song>;

  constructor(private songService: SongService) { }

  ngOnInit(): void {
    this.playlist = this.songService.playlist;
  }

}
