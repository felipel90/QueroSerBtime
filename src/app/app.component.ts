import { Component } from '@angular/core';
import { UrlParseService } from './url-parse.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  urlHttp: any;
  urlSsh: any;
  resultCheckURL: any;
  urlData: any;

  constructor(private urlParseService: UrlParseService) {             
    this.urlHttp = urlParseService.UrlParse().isValid('http://www.google.com/mail?user=fulano');
    this.urlSsh = urlParseService.UrlParse().isValid('ssh://fulano%senha@git.com/');
  }

  public validURL(value) {
    if (value === 0) {
      return this.resultCheckURL = {};
    }
    this.resultCheckURL = this.urlParseService.UrlParse().isValid(value)
    console.log('value', this.resultCheckURL);
    
  }
}
