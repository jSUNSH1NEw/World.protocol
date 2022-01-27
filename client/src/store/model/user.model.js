import { useNewMoralisObject } from 'react-moralis';


export const CreateObject = ({username, walletReceiver}) => {
const {isSaving, error, save} = useNewMoralisObject('DaoUsers');

  const user = save ({
    username: username,
    walletReceveir: walletReceiver,
    date: new Date(),
  });

  return {
    isSaving,
    error,
    user,
  };

};













