import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { ScrollDispatcher } from '@angular/cdk/overlay';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  stickyHeader: boolean = false;

  @ViewChild('container') container: ElementRef<HTMLElement>;

  get hasSavedData() {
    return false;
  }

  constructor(private scrollDispatcher: ScrollDispatcher) { }

  ngOnInit() {
    this.scrollDispatcher.scrolled().subscribe((scrolled) => {
      const clientRect = this.container.nativeElement.getBoundingClientRect();
      const toolbarHeight = (clientRect.width > 599) ? 64 : 56;
      const starContainerHeight = -250;

      this.stickyHeader = clientRect.top < starContainerHeight + toolbarHeight;
    })
  }
}
