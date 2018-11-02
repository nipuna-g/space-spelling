import { LayoutModule } from '@angular/cdk/layout';
import { ScrollDispatchModule } from '@angular/cdk/scrolling';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule, MatProgressBarModule, MatSidenavModule, MatSnackBarModule, MatToolbarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddWordComponent } from './add-word/add-word.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { PracticeComponent } from './practice/practice.component';
import { SpellingStoreService } from './spelling-store.service';
import { StartCanvasComponent } from './start-canvas/start-canvas.component';

@NgModule({
    declarations: [
        AppComponent,
        AddWordComponent,
        MainNavComponent,
        HomeComponent,
        StartCanvasComponent,
        PracticeComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        MatButtonModule,
        LayoutModule,
        MatToolbarModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        HttpClientModule,
        ScrollDispatchModule,
        MatProgressBarModule,
        MatSnackBarModule,
    ],
    providers: [
        { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 1000} },
        SpellingStoreService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
