
import { Component, OnDestroy, OnInit } from "@angular/core";


@Component({
    template: ''
})

export class DefaultComponent implements OnInit, OnDestroy {

    static menuState: boolean = false
    interval: any = undefined
    ngOnInit(): void {
    }
    ngOnDestroy(): void {
        if (this.interval != null) {
            clearInterval(this.interval)
        }
    }

    
}
