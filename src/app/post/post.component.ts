import { Component } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  imgUrl = ""
  handleImageChange(e : Event ){
    this.imgUrl = (e.target as HTMLInputElement).value;
  }
}
