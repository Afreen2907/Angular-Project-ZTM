import {
  Component,
  Input,
  EventEmitter,
  Output,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit,
    OnDestroy
{
  @Input('img') postImg = ''; //input aliases
  @Output() imgSelected = new EventEmitter<string>();

  constructor() {
    console.log('post componenet constructor is called', this.postImg);
  }

  ngOnInit() {
    console.log('ngonInit() called', this.postImg);
  }

  ngOnChanges() {
    console.log('ngOnChanges() called');
  }

  ngDoCheck() {
    console.log('ngDoCheck() called');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit()')
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked()')
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit()')
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked()')
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy()')
  }
}
