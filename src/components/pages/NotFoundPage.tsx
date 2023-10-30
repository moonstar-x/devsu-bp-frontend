import React from 'react';
import { PageWrapper } from '$components/common/pageWrapper';
import { Box } from '$components/common/box';

const NotFoundPage = () => {
  return (
    <PageWrapper title="Page Not Found!">
      <Box style={{ textAlign: 'center' }}>
        <h1>
          Page not found
        </h1>

        <p>
          The page you were looking for does not exist.
        </p>
      </Box>
    </PageWrapper>
  );
};

export default NotFoundPage;
