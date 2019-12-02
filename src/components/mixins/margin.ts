import {css} from 'styled-components/native';

export interface MarginMixin {
  m: number | string;
  ml: number | string;
  mr: number | string;
  mt: number | string;
  mb: number | string;
  mh: number | string;
  mv: number | string;
}

export const marginMixin = css<Partial<MarginMixin>>`
  ${({m}) => m && `margin: ${m}px`};
  ${({ml}) => ml && `margin-left: ${ml}`};
  ${({mr}) => mr && `margin-right: ${mr}`};
  ${({mt}) => mt && `margin-top: ${mt}`};
  ${({mb}) => mb && `margin-bottom: ${mb}`};

  ${({mh}) =>
    mh &&
    `margin-left: ${mh};
     margin-right:${mh};
`};
  ${({mv}) =>
    mv &&
    `margin-bottom: ${mv};
     margin-top: ${mv};
`};
`;
