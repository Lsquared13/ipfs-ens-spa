import React, { FC } from 'react';

export interface ApiErrorProps {
  error: any
}

export const ApiError:FC<ApiErrorProps> = ({ error }) => {
  let base = error;
  if (error && error.error && error.error.err) base = error.error.err;
  return (
    <pre style={{ whiteSpace: 'pre-wrap' }}>
      { JSON.stringify(error, null, 2)}
    </pre>
  )
}

export default ApiError;