import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute, Data, } from '@angular/router';
import { Questions } from '../shared/questions.interface';

@Component({
  selector: 'app-online-test',
  templateUrl: './online-test.component.html',
  styleUrls: ['./online-test.component.css']
})
export class OnlineTestComponent implements OnInit {

  questions: Questions;
  applicantName: String;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data
      .subscribe((data: Data) => { this.questions = data['questions']; });
    this.applicantName = this.route.snapshot.queryParams['userName'];
    console.log(typeof (this.questions));
  }

  OnSubmit(form: NgForm) {
    let arr: number[] = [];
    for (let i = 1; i <= Object.keys(form.value).length; i++) {
      arr.push(form.value[i]);
    }
    this.router.navigate(['result'], { queryParams: { options: arr }, queryParamsHandling: 'merge' });
  }

}
