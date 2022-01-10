export const networkConfigs = {
    "0xA869": {
      chainId: 43114,
      chainName: "Avalanche Testnet C-Chain",
      currencyName: "AVAX",
      currencySymbol: "AVAX",
      rpcUrl: "https://api.avax-test.network/ext/bc/C/rpc",
      blockExplorerUrl: "https://testnet.snowtrace.io/",
    },
  };
  
  export const getNativeByChain = (chain) =>
    networkConfigs[chain]?.currencySymbol || "NATIVE";
  
  export const getChainById = (chain) => networkConfigs[chain]?.chainId || null;
  
  export const getExplorer = (chain) => networkConfigs[chain]?.blockExplorerUrl;
  
  export const getWrappedNative = (chain) =>
    networkConfigs[chain]?.wrapped || null;