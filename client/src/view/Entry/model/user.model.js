import { useNewMoralisObject } from 'react-moralis';

export const CreateUser = () => {
  const { createMoralisObject } = useNewMoralisObject();
  const DaoUsersSchema = {
    name: "DaoUsers",
    schema: {
      id: {
        type: "string",
        primary: true,
      },
      username: {
        type: "string",
        required: true,
      },
      walletReceveir: {
        type: "string",
        minLength: 26,
        maxLength: 35,
        validate: (value) => {
          return /^[a-zA-Z0-9]+$/.test(value);
        },
        required: true,
      },
      date: {
        type: Date,
        default: Date.now,
      },
    },
  };
  createMoralisObject(DaoUsersSchema);
};

