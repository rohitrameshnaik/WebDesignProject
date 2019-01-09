import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { routing } from './app.routing';

import { HttpClientModule } from '@angular/common/http';
import { customHttpProvider } from './http/custom-http';
import { AlertComponent } from './directives/alert.component';
// import { AuthGuard } from './_guards/index';
import { AlertService, UserService,AuthenticationService,QuestionsService } from './services/index';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent} from './register/register.component';
import {AdminComponent} from './admin/admin.component';
import {AuthGuard} from './guards/auth.guard';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { QuestionComponent} from './question/question.component';
import { QuestionDetailComponent } from './question-detail/question-detail.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { NoticeComponent } from './notice/notice.component';
import { LocalSearchComponent } from './local-search/local-search.component';
import { UniversitySearchComponent } from './university-search/university-search.component';
import { PlacesService } from './services/places.service';
import { UniversitySearchResultComponent} from './university-search-result/university-search-result.component';
import { QuestionSearchComponent } from './question-search/question-search.component';
import { ProfessorSearchComponent } from './professor-search/professor-search.component';
import { NoticeEditComponent } from './notice-edit/notice-edit.component';
import { FormFieldsComponent } from './form-fields/form-fields.component';
import { MyquestionsComponent } from './myquestions/myquestions.component';
import { PictureWallComponent } from './picture-wall/picture-wall.component';


// import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    AlertComponent,
    HomeComponent,
    LoginComponent,
    AdminComponent,
    ProfileComponent,
    QuestionComponent,
    QuestionDetailComponent,
    NavigationComponent,
    FooterComponent,        
    NoticeComponent,
    LocalSearchComponent,
    UniversitySearchComponent,
    UniversitySearchResultComponent,
    QuestionSearchComponent,
    ProfessorSearchComponent,
    NoticeEditComponent,
    FormFieldsComponent,
    MyquestionsComponent,
    PictureWallComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    customHttpProvider,
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    QuestionsService,
    PlacesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
