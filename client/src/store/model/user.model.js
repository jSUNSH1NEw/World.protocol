import { useNewMoralisObject } from 'react-moralis';


export const CreateObject = () => {
const createMoralisObject  = useNewMoralisObject();
const CreateSchema = createMoralisObject({
    name: "DaoUsers",
      schema: {
        id: {
          type: "string",
          primary: true,
        },
        username: {
          type: "string",
          required: [true, "Username is required"],
          trim: true,
          minLength: 3,
          maxLength: 20,
          validate: (value) => {
            if (value.length < 3 || value.length > 20) {
              return "Username must be at least 3 characters long";
            }
            return (!/^[a-zA-Z0-9]+$/.test(value)) ? "Username must be alphanumeric" : undefined;
            
          },
        },
        walletReceveir: {
          type: "string",
          trim: [true, "Wallet receveir is required"],
          minLength: 26,
          maxLength: 35,
          validate: (value) => {
            if (value.length < 26 || value.length > 35) {
              return "Wallet-receiver must be between 26 and 35 characters";
            }
            return (/^0x[a-fA-F0-9]{40}$/.test(value)) ? "Wallet-receiver must be a valid Ethereum address" : undefined;
          },
          required: true,
        },
        date: {
          type: Date,
          default: Date.now,
        },
      },
  });
  return CreateSchema;

  const AddUser = () => {
    CreateSchema.save({
  
    });
  
  }
}












