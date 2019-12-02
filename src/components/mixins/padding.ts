import {css} from 'styled-components/native';

export interface PaddingMixin {
  p: number | string;
  pl: number | string;
  pr: number | string;
  pt: number | string;
  pb: number | string;
  ph: number | string;
  pv: number | string;
}

export const paddingMixin = css<Partial<PaddingMixin>>`
  ${({p}) => p && `padding: ${p}px`};
  ${({pl}) => pl && `padding-left: ${pl}`};
  ${({pr}) => pr && `padding-right: ${pr}`};
  ${({pt}) => pt && `padding-top: ${pt}`};
  ${({pb}) => pb && `padding-bottom: ${pb}`};

  ${({ph}) =>
    ph &&
    `padding-left: ${ph};
     padding-right:${ph};
`};

  ${({pv}) =>
    pv &&
    `padding-bottom: ${pv};
     padding-top: ${pv};
`};
`;
