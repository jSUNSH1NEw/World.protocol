export const validateWallet = (wallet) => {
    const MIN_LENGTH = 26;
    const MAX_LENGTH = 35;

    const VALID_CHARS = /^0x[a-fA-F0-9]{40}$/;
    const valid =
        wallet.length >= MIN_LENGTH &&
        wallet.length <= MAX_LENGTH &&
        VALID_CHARS.test(wallet);
    return validwall;

    const MIN_USERNAME8LENGTH = 3;
    const MAX_USERNAME_LENGTH = 20;
     //valid regex for username
    const VALID_CHARS_USERNAME = /^[a-zA-Z0-9]+$/;
    const validusername =
        username.length >= MIN_LENGTH &&
        username.length <= MAX_LENGTH &&
        VALID_CHARS.test(username);
    return validuser;


    const { getMoralisObject } = useMoralis();
    const DaoUsers = getMoralisObject("DaoUsers");
    const user = await DaoUsers.findOne({ walletReceveir });
    // check if wallet is valid and not already used


    if (validwall && !user  && validuser) {
        const newUser = await DaoUsers.save({
            walletReceveir,
            username,
        });

         return newUser;
         
    } 
    return 'Wallet is already used';
  };

 