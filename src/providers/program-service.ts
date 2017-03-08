import {
  Injectable
} from '@angular/core';
import {
  Http
} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProgramService {
  students: any;
  programs: any;
  scholarships: any;

  constructor(public http: Http) {
    console.log('Hello ProgramService Provider');
  }

  getStudentsLocalData() {
    return this.http.get('data/students.json').map(res => res.json());
  }

  getProgramsLocalData() {
    return this.http.get('data/programs.json').map(res => res.json());
  }

  // getScholarshipLocalData() {
  //   this.http.get('data/scholarships.json').map(res => res.json()).subscribe(scholarships => {
  //     return scholarships;
  //   });
  // }


}
