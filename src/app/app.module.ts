import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuestionComponent } from './quiz/question/question.component';
import { HintComponent } from './question/hint/hint.component';
import { ChoicesComponent } from './quiz/question/choices/choices.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    QuestionComponent,
    HintComponent,
    ChoicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
