export const validateWallet = (wallet) => {
    const MIN_LENGTH = 26;
    const MAX_LENGTH = 35;
    const VALID_CHARS = /^[a-zA-Z0-9]+$/;
    const valid =
        wallet.length >= MIN_LENGTH &&
        wallet.length <= MAX_LENGTH &&
        VALID_CHARS.test(wallet);
    return valid;

    //check if we have already this wallet in the db
    // if (valid) {
    //     const walletExists = await Wallet.findOne({
    //         where: {
    //             wallet: wallet,
    //         },
    //     });
    //     if (walletExists) {
    //         valid = false;
    //     }
    // }

  };