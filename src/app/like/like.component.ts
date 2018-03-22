import { Component, OnInit } from '@angular/core';
import { ApiService } from '../app.service';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  service: ApiService;
  likecounter = 0;
  constructor() {
    // this.service = service;
   }

  ngOnInit() {
  }

  likeCounter(): boolean {
    this.likecounter++;
    return true;
  }

  getLikeCounter(): number {
    console.log(this.likecounter);
    return this.likecounter;
  }
}
