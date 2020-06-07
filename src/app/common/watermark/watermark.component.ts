import { Component, OnInit, HostBinding } from '@angular/core';
import { SafeStyle, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-watermark',
  template: '<div></div>',
  styles: [
    `
      app-watermark {
        pointer-events: none;
        z-index: 999999;
        position: 'fixed';
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        overflow: 'hidden';
      }
    `
  ]
})
export class WatermarkComponent implements OnInit {
  constructor(
    private sanitizer: DomSanitizer,
  ) {}

  @HostBinding('style.background')
  svgImage: SafeStyle;

  ngOnInit() {
    this.svgImage = this.sanitizer.bypassSecurityTrustStyle(
      'url(' + this.createSvg() + ')'
    );
  }

  createSvg() {
    const user = '刺魂';
    const svgStr = `<svg xmlns="http://www.w3.org/2000/svg" width="158px" height="100px">
    <text
      x="0px"
      y="50px"
      dy="14px"
      text-anchor="start"
      stroke="#000"
      stroke-opacity="0.08"
      fill="none"
      transform="rotate(-30,0 50)"
      font-weight="100"
      font-size="12"
      font-family="mircorsoft yahe" >
      刺魂(50332)
    </text>
    </svg>`;
    return `data:image/svg+xml;base64,${window.btoa(
      unescape(encodeURIComponent(svgStr))
    )}`;
  }
}
