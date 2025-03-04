import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { ButtonComponent } from './component/button/button.component';
import { PhotoComponent } from './component/photo/photo.component';

@Component({
  selector: 'con-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe, ButtonComponent, PhotoComponent],
  templateUrl: './con.component.html',
  styleUrl: './con.component.scss'
})
export class AppComponent {
  firestore: Firestore = inject(Firestore);
  items$: Observable<any[]>;

  constructor() {
    const aCollection = collection(this.firestore, 'items')
    this.items$ = collectionData(aCollection);
  }
}
