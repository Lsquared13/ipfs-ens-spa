import React, { FC, useState } from 'react';
import { NavigateFn } from '@reach/router';
import { SearchField, Button } from './sharedUI';

interface DeploySearchProps {
  navigate: NavigateFn | undefined
}

export const DeploySearch: FC<DeploySearchProps> = (props) => {
  const { navigate } = props;

  const [searchState, setSearchState] = useState('')
  return (
    <>
      <SearchField accessibilityLabel={'View a Deployment'}
        autoComplete={'off'}
        onChange={({ value }) => setSearchState(value || '')}
        value={searchState}
        id='view-deploy' />
      <Button onClick={() => navigate && navigate(`/deploy/${searchState}`)}>
        Go to {searchState}
      </Button>
    </>
  )
}

export default DeploySearch;