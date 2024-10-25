import React, { CSSProperties } from 'react';
import { CodeBlock } from 'react-code-blocks';
import { CodeBlockProps } from 'react-code-blocks/dist/components/CodeBlock';
import styled from 'styled-components';
import { WIDTH_BOUNDARY_SMALLEST } from '../../../../../constants/layout';

type Props = CodeBlockProps & { style?: CSSProperties };

export const CodeSnippet: React.FC<Props> = ({ style, ...blockProps }) => {
  return (
    <StyledCode style={style}>
      <CodeBlock {...blockProps} />
    </StyledCode>
  );
};

const StyledCode = styled.code`
  font-size: 14px;

  @media (max-width: ${WIDTH_BOUNDARY_SMALLEST}) {
    -webkit-text-size-adjust: 100%;
    font-size: 12px;
  }
`;
