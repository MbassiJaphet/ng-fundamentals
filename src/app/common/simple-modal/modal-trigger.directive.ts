import { Directive, OnInit, Inject, ElementRef, Input } from "@angular/core";
import { JQ_TOKEN } from "..";

@Directive({
  selector: '[modal-trigger]'
})
export class ModalTriggerDirective implements OnInit {
  private el: HTMLElement;
  @Input('modal-trigger') modalId!: string;

  constructor(ref: ElementRef, @Inject(JQ_TOKEN) private jQuery : any) {
    this.el = ref.nativeElement;
  } 
  
  ngOnInit() {
    this.el.addEventListener('click', e => {
      this.jQuery(`#${this.modalId}`).modal({})
    })
  }
  
}