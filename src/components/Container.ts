import styled from 'styled-components/native';
import {marginMixin, MarginMixin} from './mixins/margin';
import {paddingMixin, PaddingMixin} from './mixins/padding';
import {positionedMixin, PositionedMixin} from './mixins/positioned';
import {FlexStyle, FlexAlignType} from 'react-native';
import {FlexMixin, flexMixin} from './mixins/flex';

export type ContainerProps = Partial<
  {
    bgColor: string;

    overflow: 'visible' | 'hidden' | 'scroll';

    height: number | string;
    maxWidth: number | string;
    minHeight: number | string;
    width: number | string;

    self: string;
    items: FlexAlignType;
    justify: FlexStyle['justifyContent'];

    borderRadius: number | string;
    zIndex: number;
    opacity: number;
  } & MarginMixin &
    PaddingMixin &
    PositionedMixin &
    FlexMixin
>;

const Container = styled.View<ContainerProps>`
  ${marginMixin}
  ${paddingMixin}
  ${positionedMixin}
  ${flexMixin}

  ${({bgColor}) => bgColor && `background-color: ${bgColor}`};
  ${({opacity}) => opacity && `opacity: ${opacity}`};

  ${({overflow}) => overflow && `overflow: ${overflow}`};

  ${({width}) => width && `width: ${width}`};
  ${({maxWidth}) => maxWidth && `max-width: ${maxWidth}`};
  ${({height}) => height && `height: ${height}`};
  ${({minHeight}) => minHeight && `min-height: ${minHeight}`};

  ${({self}) => self && `align-self: ${self}`};
  ${({items}) => items && `align-items: ${items}`};
  ${({justify}) => justify && `justify-content: ${justify}`};

  ${({borderRadius}) => borderRadius && `border-radius: ${borderRadius}`};
  ${({zIndex}) => zIndex && `z-index: ${zIndex}`};
`;

export default Container;
