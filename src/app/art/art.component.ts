import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-art',
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.css']
})
export class ArtComponent implements OnInit {
  currentPhoto = 'still-life-objects'
  photos = ['still-life-objects', 'boxes', 'figures', 'hands', 'flower-pot', 'outside-2',  'trash', 'toilet-paper']

  onThumbnailClicked(event: KeyboardEvent, photo: string){
    this.currentPhoto = photo;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
