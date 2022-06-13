import { Container } from '@mui/material';
import React from 'react';

interface PageContainerProps {
  children?: React.ReactNode;
}

const PageContainer: React.FC<PageContainerProps> = ({ children }) => (
  <Container
    sx={{
      margin: 0,
      maxWidth: '100%!important',
      width: '100%',
    }}
  >
    {children}
  </Container>
);

export default PageContainer;
