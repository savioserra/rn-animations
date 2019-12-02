import {css} from 'styled-components/native';

export interface PositionedMixin {
  top: number | string;
  bottom: number | string;
  left: number | string;
  right: number | string;

  position: 'absolute' | 'relative';
}

export const positionedMixin = css<Partial<PositionedMixin>>`
  ${({position}) => position && `position: ${position}`};
  ${({top}) => top && `top: ${top}`};
  ${({bottom}) => bottom && `bottom: ${bottom}`};
  ${({left}) => left && `left: ${left}`};
  ${({right}) => right && `right: ${right}`};
`;
