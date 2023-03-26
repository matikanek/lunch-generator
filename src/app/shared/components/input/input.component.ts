import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl, ValidatorFn, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit, OnDestroy {
  @Input() labelText: string = '';
  @Input() placeholer: string = '';
  @Input() icon: string | null = null;
  @Input() errorText: string = '';
  @Input() validators: ValidatorFn[] | null = null;
  @Input() loader: boolean = false;
  @Output() inputChange = new EventEmitter<string>();
  @Output() loaderChange = new EventEmitter<boolean>();

  inputFormControl = new FormControl<string>('', { nonNullable: true });
  private _subscriptions: Subscription[] = [];

  ngOnInit(): void {
    this.inputFormControl.setValidators(this.validators);

    this._subscriptions.push(
      this.inputFormControl.valueChanges
        .pipe(
          debounceTime(300),
          distinctUntilChanged(),
          filter(() => this.inputFormControl.valid),
        )
        .subscribe(value => {
          this.inputChange.emit(value);
          this.loaderChange.emit(true);
        }),
    );
  }

  ngOnDestroy(): void {
    this._subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
