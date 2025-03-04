import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../service/photo/photo.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'con-photo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './photo.component.html',
  styleUrl: './photo.component.scss'
})

export class PhotoComponent implements OnInit {
  photos!: Photo[];

  constructor(private photoService: PhotoService) { }

  ngOnInit(): void {
    this.photoService.getPhotos().subscribe(
      (data) => this.photos = data as Photo[]
    );
  }

}

interface Photo {
  id: string;
  alt_description: string;
  urls: {
    raw: string;
    regular: string;
    small: string;
    thumb: string;
  }
}
