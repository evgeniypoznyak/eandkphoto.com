import { animate, state, style, transition, trigger } from '@angular/animations';

export const sliderTrigger = trigger('sliderTrigger', [
  state('default', style({
     opacity: 1 // это не обязательно выводить, так как по умолчанию нет ничего и видно
  })),
  // default - у Макса это это
  state('hidden', style({
    opacity: 0,
    // 'width': '0%',
    // 'left' : '100%',
  })),
  state('fade', style({
    opacity: 1,
  })),
 // transition('hidden => default', animate('300ms ease-out')),
  transition('hidden => default', [
  style({
    // opacity: 1,
  }),
    animate(1500)
  ]),
  transition('default => hidden', [
  style({

  }),
    animate(1500)
  ]),
  transition('hidden <=> fade', [
  style({
    // opacity: 1,
  }),
    animate(1500)
  ]),
//  transition('default => hidden', animate(1000)),
]);





export const textSliderTrigger = trigger('textSliderTrigger', [
  state('showed', style({
    // opacity: 1 // это не обязательно выводить, так как по умолчанию нет ничего и видно
  })),
  // default - у Макса это это
  state('hidden', style({
    opacity: 0,
    // 'font-size': '0px'
  })),
  state('default', style({
    'background-color': 'rgba(81, 149, 255, 0.62)',
    // 'font-size': '55px'
  })),
  state('state2', style({
    'background-color': 'rgba(0, 128, 0, 0.33)',
    'font-size': '66px'
  })),
  state('state3', style({
    'background-color': 'rgba(255, 192, 192, 0.3)',
    'font-size': '47px'
  })),

  transition('default => hidden', [
    style({

    }),
    animate(1500),
  ]),
  transition('hidden => default', [
    style({

    }),
    animate(1500),
  ]),
]);
