import { Component, OnInit } from '@angular/core';
import { Answers } from '../shared/answers.interface';
import { ActivatedRoute, Data, Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  answers: any;
  testResults: [] = [];
  testPassed: boolean;
  testScore: number = 0;

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.route.data
      .subscribe((data: Data) => {
        this.answers = data['answers'];
      });
    this.testResults = this.route.snapshot.queryParams['options'];
  }

  OnTryAgain() {
    this.router.navigate(['onlineTest'], { queryParams: { userName: this.route.snapshot.queryParams['userName'] } });
  }

  calculateResult() {
    let correctCount: number = 0;
    for (let x = 0; x < Object.keys(this.answers.answers).length; x++) {
      if (+this.testResults[x] === (this.answers.answers[x].answer.answerKey)) {
        correctCount++;
      }
    }
    this.testScore = +((correctCount / Object.keys(this.answers.answers).length) * 100).toPrecision(2);

    if (this.testScore > 60) {
      this.testPassed = true;
    }
    else {
      this.testPassed = false;
    }
  }
}
