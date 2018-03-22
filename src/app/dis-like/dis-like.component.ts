import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dis-like',
  templateUrl: './dis-like.component.html',
  styleUrls: ['./dis-like.component.css']
})
export class DisLikeComponent implements OnInit {

  disLikeCounter = 0;
  constructor() { }

  ngOnInit() {
  }

  disLike(): boolean {
    this.disLikeCounter++;
    return true;
  }

  getDisLike(): number {
    return this.disLikeCounter;
  }

}
