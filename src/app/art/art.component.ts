import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-art',
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.css']
})
export class ArtComponent implements OnInit {
  currentPhoto = 'boxes'
  photos = ['boxes', 'climbing-shoe', 'figures', 'hands', 'kitchen', 'outside-1', 'outside-2', 'sheets', 'shoes', 'trash', 'space-mountain', 'watermelon']

  onThumbnailClicked(event: KeyboardEvent, photo: string){
    this.currentPhoto = photo;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
