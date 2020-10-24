import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.page.html',
  styleUrls: ['./book-detail.page.scss'],
})
export class BookDetailPage implements OnInit {
  libro: any;
  constructor(private activatedRoute: ActivatedRoute) { }


  ionViewDidLoad() { }

  ngOnInit() 
  { 
    this.libro = JSON.parse(this.activatedRoute.snapshot.paramMap.get('libro'));
  }

}
