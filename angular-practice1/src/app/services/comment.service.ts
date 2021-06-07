import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IComment} from "../patterns/comment.pattern";

@Injectable({
  providedIn: 'root'
})
export class CommentService {
private url = 'http://jsonplaceholder.typicode.com/comments?postId=';
  constructor(private httpClient: HttpClient) { }

  getComments(id: number): Observable<IComment[]> {
    return this.httpClient.get<IComment[]>(this.url + id);
  }
}
