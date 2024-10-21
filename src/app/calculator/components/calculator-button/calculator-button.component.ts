import { Component, HostBinding, input } from '@angular/core';

@Component({
  selector: 'calculator-button',
  standalone: true,
  imports: [],
  templateUrl: './calculator-button.component.html',
  styleUrl: './calculator-button.component.scss',
  host: {
    class: 'w-1/4 border-r border-b border-indigo-400',
    // attibute: 'hola',
    // 'data-size': 'XL'
  }
})
export class CalculatorButtonComponent {
  // Transforma a boleano si viene o no el string
  public isCommand = input( false, {
    transform: ( value: boolean | string ) =>
      typeof value === 'string' ? value === '' : value
  });

  public isDoubleSize = input( false, {
    transform: ( value: boolean | string ) =>
      typeof value === 'string' ? value === '' : value
  });

  // @HostBinding('class.is-command') get commandStyle() {
  //   return this.isCommand();
  // }

  @HostBinding('class.w-2/4') get commandStyle() {
    return this.isDoubleSize();
  }
}
