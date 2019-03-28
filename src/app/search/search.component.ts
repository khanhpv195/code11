import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./../custom.scss']
})
export class SearchComponent implements OnInit {

  key: '';
  messages: '';

  ngOnInit() {
  }

  getKeySearch(event) {

    this.key = event.target.value;
    this.messages = this.key;
  }

  callSearch() {
    console.log(this.messages);
  }

}
