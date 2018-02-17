import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';

export const menuTrigger = trigger('menuTrigger', [

    state('default', style({})),

    state('clicked', style({

      width: '300px'

    })),

    transition(':enter',[
      style({
        opacity: 0,
      }),
        animate(300, style({
          transform: 'rotate(0deg)',
        })),
        animate('600ms ease-in',
          keyframes([
            style({
              display: 'inline-block',
              transform: 'translateY(-100%)',
              opacity: 1,
            }),
            style({
              display: 'inline-block',
              transform: 'translateY(0%)',
            }),
            style({
              display: 'inline-block',
              transform: 'translateY(-50%)',
            }),
            style({
              display: 'inline-block',
              transform: 'translateY(0%)',
            }),
            style({
              display: 'inline-block',
              transform: 'translateY(-20%)',
            }),
            style({
              display: 'inline-block',
              transform: 'translateY(0%)',
            }),
          ]),
        ),
        animate(300, style({
          'transform-origin': 'top left',
          transform: 'rotate(55deg)',
        })),

      ]
    ),


    transition('default => clicked', animate(300)),


  ]
);
