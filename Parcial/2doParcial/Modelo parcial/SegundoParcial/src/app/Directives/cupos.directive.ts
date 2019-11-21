import { Directive, Input, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appCupos]'
})
export class CuposDirective implements OnInit {

  @Input() cupos;
  constructor(private host: ElementRef) { }

  ngOnInit() {
    if (this.cupos > 20) {
      this.host.nativeElement.style.color = '#0ec704';
    } else if (this.cupos > 10) {
      this.host.nativeElement.style.color = '#ee8637';
    }
  }

}
