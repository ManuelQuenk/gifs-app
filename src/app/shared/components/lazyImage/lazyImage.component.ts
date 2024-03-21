import { Component, Input, OnInit, input } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazyImage.component.html'
})
export class LazyImageComponent implements OnInit{

  @Input()
  public url!: string;

  @Input()
  public alt: string = '';

  public hasLoaded: boolean = false

  ngOnInit(): void {
    if (!this.url) throw new Error('URL property not provided')
  }

  onLoad() {
    console.log('image loaded')
    setTimeout(() => {
      this.hasLoaded = true
    }, 1000);
  }

}
