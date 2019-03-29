import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/observable/fromPromise';
import { SearchService } from './search.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./../custom.scss'],
  providers: [SearchService],
})
export class HomeComponent implements OnInit {

  arrCourse = ['AngularJs', 'ReactJs', 'Laravel']
  resutlData = {};

  constructor(private searchService: SearchService) {

    this.searchService.getSearch()
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  ngOnInit() {

  }


}
