import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { OnlineTestComponent } from './online-test/online-test.component';
import { RegistrationComponent } from './registration/registration.component';
import { ResultComponent } from './result/result.component';
import { QuestionResolverService } from './services/question-resolver.service';
import { AnswersResolverService } from './services/answers-resolver.service';



const appRoutes: Routes = [
  {
    path: "",
    redirectTo: "register",
    pathMatch: "full"
  },
  {
    path: "register",
    component: RegistrationComponent
  },
  {
    path: "onlineTest",
    component: OnlineTestComponent,
    resolve: { questions: QuestionResolverService }
  },
  {
    path: "result",
    component: ResultComponent,
    resolve: { answers: AnswersResolverService }
  }
];

@NgModule({
  declarations: [
    AppComponent,
    OnlineTestComponent,
    RegistrationComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { useHash: true }),
    FormsModule,
    HttpClientModule
  ],
  providers: [AnswersResolverService, QuestionResolverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
