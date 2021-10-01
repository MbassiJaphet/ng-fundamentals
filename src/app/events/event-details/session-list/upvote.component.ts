import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'upvote',
    styleUrls: ['./upvote.component.css'],
    template: `
        <div class="votingWidgetContainer pointable" (click)="onClick()">
            <div class="well votingWidget">
                <div class="votingButton">
                    <i class="glyphicon glyphicon-heart" [style.color]="iconColor"></i>
                </div>
                <div class="badge badge-inverse votingCount">
                    <div>{{count}}</div>
                </div>
            </div>
        </div>
    `
})
export class UpvoteComponent {
    public iconColor !: string;
    @Input() public count!: number;
    @Input() public set voted(val: boolean)  { this.iconColor = val ? 'red' :  'white'};
    @Output() vote = new EventEmitter();

    constructor() {}

    onClick() {
        this.vote.emit('');
    }
}