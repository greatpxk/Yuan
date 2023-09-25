import { List } from '@douyinfe/semi-ui';
import { useObservableState } from 'observable-hooks';
import React from 'react';
import { openSingletonComponent } from '../../layout-model';
import { registerCommand } from '../CommandCenter/CommandCenter';
import { AccountInfoItem } from './AccountInfoItem';
import { accountIds$ } from './model';

export const AccountList = React.memo(() => {
  const accountIds = useObservableState(accountIds$, []);

  return (
    <List>
      {accountIds.map((accountId) => (
        <AccountInfoItem key={accountId} account_id={accountId} />
      ))}
    </List>
  );
});

registerCommand('AccountList', () => {
  openSingletonComponent('AccountList');
});
