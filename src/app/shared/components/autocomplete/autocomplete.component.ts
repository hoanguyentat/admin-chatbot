import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subject, merge } from 'rxjs';
import { startWith, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent implements OnInit, OnChanges {
  myControl: FormControl;
  filteredOptions: Observable<string[]>;
  @Input()
  label: string;
  @Input()
  options: string[];

  @Input()
  model: string;

  @Output()
  modelChange: EventEmitter<string>;

  private changeSubject: Subject<string>;

  constructor() {
    this.myControl = new FormControl();
    this.modelChange = new EventEmitter<string>();
    this.changeSubject = new Subject<string>();
  }

  ngOnInit() {
    this.filteredOptions = merge(this.myControl.valueChanges, this.changeSubject)
      .pipe(
        startWith(this.model || ''),
        tap(value => {
          // console.log(value);
          this.modelChange.emit(value);
          this.myControl.setValue(value, {
            emitEvent: false,
            emitModelToViewChange: true,
          });
        }),
        map(value => this._filter(value)),
    );
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes['model'].currentValue);
    this.changeSubject.next(this.model);
  }

  private _filter(value: string): string[] {
    value = value || '';
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().startsWith(filterValue));
  }
}
