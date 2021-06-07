import {Component, Input, OnInit} from '@angular/core';
import {IComment} from "../../patterns/comment.pattern";
import {CommentService} from "../../services/comment.service";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  @Input()
  someId: number;
  comments: IComment[] = [];
  constructor(private commentService: CommentService) { }

  ngOnInit(): void {
    this.commentService.getComments(this.someId).subscribe(value => this.comments = value);
  }

}
