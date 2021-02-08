import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-art',
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.css']
})
export class ArtComponent implements OnInit {
  currentPhoto = 'iron-man'
  photos = ['iron-man', 'boxes', 'climbing-shoe', 'figures', 'hands', 'space-mountain', 'outside-1', 'outside-2',  'trash', 'watermelon']

  onThumbnailClicked(event: KeyboardEvent, photo: string){
    this.currentPhoto = photo;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
