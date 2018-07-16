import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent implements OnInit {
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

  constructor() {
    this.myControl = new FormControl();
    this.modelChange = new EventEmitter<string>();
  }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(this.model || ''),
        tap(value => {
          this.modelChange.emit(value);
        }),
        map(value => this._filter(value)),
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().startsWith(filterValue));
  }
}
