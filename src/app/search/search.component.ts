import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./../custom.scss']
})
export class SearchComponent implements OnInit {

  keysearch: '';

  ngOnInit() {
  }


  onSubmit(formSearch) {
    console.log(formSearch.value);
  }

}
