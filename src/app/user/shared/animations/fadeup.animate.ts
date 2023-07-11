import {
  trigger,
  sequence,
  animate,
  transition,
  style,
} from '@angular/animations';

export const FadeUpAnimation = trigger('FadeUpAnimation', [
  transition('void => *', [
    style({
      height: '*',
      opacity: '0',
      transform: 'translateY(550px)',
      'box-shadow': 'none',
    }),
    sequence([
      animate(
        '.85s ease',
        style({
          height: '*',
          opacity: '0.5',
          transform: 'translateY(0)',
          'box-shadow': 'none',
        })
      ),
      animate(
        '.85s ease',
        style({
          height: '*',
          opacity: 1,
          transform: 'translateX(0)',
        })
      ),
    ]),
  ]),
]);
