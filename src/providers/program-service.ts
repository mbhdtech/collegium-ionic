import {
  Injectable
} from '@angular/core';
import {
  Http
} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProgramService {

  constructor(public http: Http) {
    console.log('Hello ProgramService Provider');
  }

  getLocalData() {
    // console.log(this.http.get('../../www/data/programs.json'));

    this.http.get('data/programs.json').subscribe(data => {
      console.log(data);
    });
  }

// https://www.reddit.com/r/gifs/top/.json?limit=10&sort=hot


}
