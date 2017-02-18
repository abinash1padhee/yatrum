import { UserEffects } from './effects/user.effects';
import { InstagramIntegrationService } from './services/instagram-integration.service';
// Core angular modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { HttpModule } from '@angular/http';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { RouterModule } from '@angular/router';
import { StoreLogMonitorModule, useLogMonitor } from '@ngrx/store-log-monitor';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { ToastyModule } from 'ng2-toasty';
import { DatepickerModule } from 'angular2-material-datepicker';
import { CalendarModule } from 'primeng/primeng';

// Pipes
import { ThumbnailPipe } from './pipes/thumbnail';

// Services 
import { TripsService } from './services/trips.service';
import { UserAuthService } from './services/user-auth.service';
import { ServerAuthService } from './services/server-auth.service';
import { CloudinaryIntegrationService } from './services/cloudinary-integration.service';
import { UserService } from './services/user.service';
import { TripFormService } from './services/forms/trip-form.service';
import { PlaceFormService } from './services/forms/place-form.service';

// Guards
import { TripsResolveGuard } from './guards/trips-resolve.guard';
import { CanActivateViaAuthGuard } from './guards/auth.guard';

// Effects
import { TripsEffects } from './effects/trips.effects';
import { UserAuthEffects } from './effects/user-auth.effect';
import { InstagramEffects } from './effects/instagram.effects';

import { routes } from './app.routes';
import { reducer } from './reducers/index';

//Directives
import { FileSelectDirective } from 'ng2-file-upload';
import { Autosize } from 'angular2-autosize/angular2-autosize';
import { TripHasPlaces } from './Validators/trip-has-places.directive';

// Components
import { AppComponent } from './app.component';
import { SearchedTripsComponent } from './components/search/searched-trips/searched-trips.component';
import { TripsSearchComponent } from './components/search/trips-search/trips-search.component';
import { TripsSearchFilterComponent } from './components/shared/search/trips-search-filter/trips-search-filter.component';
import { DashboardSearchFilterComponent } from './components/shared/search/dashboard-search-filter/dashboard-search-filter.component';
import { SearchFilterComponent } from './components/shared/search/search-filter/search-filter.component';
import { SearchComponent } from './components/search/search.component';
import { TripEditComponent } from './components/trips/trip-edit/trip-edit.component';
import { SignupComponent } from './components/shared/auth/signup/signup.component';
import { InstagramAuthenticationCallbackComponent } from './components/shared/instagram-authentication-callback/instagram-authentication-callback.component';
import { LoginComponent } from './components/shared/auth/login/login.component';
import { TripActivityComponent } from './components/trips/trip-detail/trip-activity/trip-activity.component';
import { TripDetailComponent } from './components/trips/trip-detail/trip-detail.component';
import { TripsComponent } from './components/trips/trips.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { UserComponent } from './components/user/user.component';
import { UserFollowingComponent } from './components/user/user-profile/user-following/user-following.component';
import { UserFollowersComponent } from './components/user/user-profile/user-followers/user-followers.component';
import { UserMediaComponent } from './components/user/user-profile/user-media/user-media.component';
import { UserTripsComponent } from './components/user/user-profile/user-trips/user-trips.component';
import { UserProfileComponent } from './components/user/user-profile/user-profile.component';
import { UserSettingsComponent } from './components/user/user-settings/user-settings.component';
import { ImageUploadComponent } from './components/trips/trip-edit/image-upload/image-upload.component';
import { AddPlaceComponent } from './components/trips/trip-edit/add-place/add-place.component';
import { PlaceDetailComponent } from './components/trips/trip-detail/place-detail/place-detail.component';
import { NewPlaceComponent } from './components/trips/trip-edit/new-place/new-place.component';
import { UpdatePlaceComponent } from './components/trips/trip-edit/update-place/update-place.component';
import { AmbassadorComponent } from './components/misc/ambassador/ambassador.component';
import { CommentEffects } from './effects/comments.effects';
import { TripCommentComponent } from './components/trips/trip-detail/trip-comment/trip-comment.component';
import { NewTripCommentComponent } from './components/trips/trip-detail/new-trip-comment/new-trip-comment.component';

// Satellizer Module
import { Ng2UiAuthModule, CustomConfig } from 'ng2-ui-auth';
import { MyAuthConfig } from './auth-config';
import { DashboardModule } from './components/dashboard/index';
import { SharedModule } from './components/shared/index';




const firebaseConfig = {
  apiKey: "AIzaSyDRiL-DZLnvLoj37YZNqQyYcOaOecXFOus",
  authDomain: "travel-app-frontend.firebaseapp.com",
  databaseURL: "https://travel-app-frontend.firebaseio.com",
  storageBucket: "travel-app-frontend.appspot.com"
};

const myFirebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Redirect
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TripsComponent,
    TripDetailComponent,
    TripActivityComponent,
    LoginComponent,
    SignupComponent,
    InstagramAuthenticationCallbackComponent,
    UserComponent,
    UserSettingsComponent,
    TripEditComponent,
    UserProfileComponent,
    UserTripsComponent,
    UserMediaComponent,
    FileSelectDirective,
    UserFollowersComponent,
    UserFollowingComponent,
    SearchComponent,
    SearchFilterComponent,
    DashboardSearchFilterComponent,
    TripsSearchFilterComponent,
    TripsSearchComponent,
    SearchedTripsComponent,
    ImageUploadComponent,
    AddPlaceComponent,
    Autosize,
    PlaceDetailComponent,
    NewPlaceComponent,
    UpdatePlaceComponent,
    ThumbnailPipe,
    TripHasPlaces,
    AmbassadorComponent,
    TripCommentComponent,
    NewTripCommentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CustomFormsModule,
    ReactiveFormsModule,
    HttpModule,
    Ng2UiAuthModule.forRoot(MyAuthConfig),
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig),
    StoreModule.provideStore(reducer),
    EffectsModule.run(UserEffects),
    EffectsModule.run(UserAuthEffects),
    EffectsModule.run(TripsEffects),
    EffectsModule.run(InstagramEffects),
    EffectsModule.run(CommentEffects),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    RouterModule.forRoot(routes),
    //TODO: Fix this when AOT error is resolved
    // StoreDevtoolsModule.instrumentStore({
    //   monitor: useLogMonitor({
    //     visible: false,
    //     position: 'right'
    //   })
    // }),
    StoreLogMonitorModule,
    SlimLoadingBarModule.forRoot(),
    ToastyModule.forRoot(),
    DatepickerModule,
    CalendarModule,
    SharedModule,
    DashboardModule
  ],
  providers: [
    UserAuthService,
    UserService,
    TripsService,
    ServerAuthService,
    TripsResolveGuard,
    InstagramIntegrationService,
    CloudinaryIntegrationService,
    CanActivateViaAuthGuard,
    PlaceFormService,
    TripFormService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
