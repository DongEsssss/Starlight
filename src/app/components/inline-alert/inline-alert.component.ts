// Copyright (c) 2017 VMware, Inc. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
import { Component, Output, EventEmitter } from "@angular/core";
import { Subscription } from "rxjs";

@Component({
  selector: "inline-alert",
  templateUrl: "./inline-alert.component.html",
  styleUrls: ["./inline-alert.component.scss"]
})
export class InlineAlertComponent {
  inlineAlertType: string = "danger";
  inlineAlertClosable: boolean = false;
  alertClose: boolean = true;
  displayedText: string = "";
  showCancelAction: boolean = false;
  useAppLevelStyle: boolean = false;
  timer: Subscription | null = null;
  count: number = 0;
  blinking: boolean = false;

  @Output() confirmEvt = new EventEmitter<boolean>();
  @Output() closeEvt = new EventEmitter<boolean>();

  constructor(
    ) {}

  public get errorMessage(): string {
    return this.displayedText;
  }

  // Show error message inline
  public showInlineError(errorString: string): void {
    this.displayedText = errorString;

    this.inlineAlertType = "danger";
    this.showCancelAction = false;
    this.inlineAlertClosable = true;
    this.alertClose = false;
    this.useAppLevelStyle = false;
  }

  // Show confirmation info with action button
  public showInlineConfirmation(warningString: string): void {
    this.displayedText = warningString;
    this.inlineAlertType = "warning";
    this.showCancelAction = true;
    this.inlineAlertClosable = false;
    this.alertClose = false;
    this.useAppLevelStyle = false;
  }

  // Show inline sccess info
  public showInlineSuccess(infoString: string): void {
    this.displayedText =infoString;
    this.inlineAlertType = "success";
    this.showCancelAction = false;
    this.inlineAlertClosable = true;
    this.alertClose = false;
    this.useAppLevelStyle = false;
  }
  // Show warning
  public showInlineWarning(warningString: string): void {
    this.displayedText = warningString;
    this.inlineAlertType = 'warning';
    this.showCancelAction = false;
    this.inlineAlertClosable = true;
    this.alertClose = false;
    this.useAppLevelStyle = false;
  }
  // Close alert
  public close(): void {
    this.alertClose = true;
  }

  public blink() {}

  confirmCancel(): void {
    this.confirmEvt.emit(true);
  }
}
