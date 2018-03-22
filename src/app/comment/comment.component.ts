import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  comments = [];
  constructor() { }

  ngOnInit() {
  }

  comment(arg: string): boolean {
    this.comments.push(arg);
    return true;
  }

  getComment(): Array<string> {
    return this.comments;
  }
}
