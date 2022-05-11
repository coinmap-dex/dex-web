export default {
    "name": "bsc",
    "chainId": "56",
    "contracts": {
        "CoinmapDex": {
            "address": "0xa7e44aE03307de5192944520251e95e89A56A953",
            "abi": [
                {
                    "inputs": [
                        {
                            "internalType": "contract ISwapRouter",
                            "name": "_swapRouter",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "_feeTo",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "_feeRate",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "constructor"
                },
                {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": true,
                            "internalType": "address",
                            "name": "previousOwner",
                            "type": "address"
                        },
                        {
                            "indexed": true,
                            "internalType": "address",
                            "name": "newOwner",
                            "type": "address"
                        }
                    ],
                    "name": "OwnershipTransferred",
                    "type": "event"
                },
                {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": true,
                            "internalType": "address",
                            "name": "maker",
                            "type": "address"
                        },
                        {
                            "indexed": false,
                            "internalType": "bytes32",
                            "name": "salt",
                            "type": "bytes32"
                        },
                        {
                            "indexed": false,
                            "internalType": "enum CoinmapDex.OrderStatus",
                            "name": "status",
                            "type": "uint8"
                        }
                    ],
                    "name": "UpdateStatus",
                    "type": "event"
                },
                {
                    "inputs": [],
                    "name": "ORDER_TYPEHASH",
                    "outputs": [
                        {
                            "internalType": "bytes32",
                            "name": "",
                            "type": "bytes32"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "maker",
                            "type": "address"
                        },
                        {
                            "internalType": "bytes32",
                            "name": "salt",
                            "type": "bytes32"
                        }
                    ],
                    "name": "cancelOrder",
                    "outputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "signer",
                            "type": "address"
                        },
                        {
                            "components": [
                                {
                                    "internalType": "address",
                                    "name": "maker",
                                    "type": "address"
                                },
                                {
                                    "internalType": "address",
                                    "name": "payToken",
                                    "type": "address"
                                },
                                {
                                    "internalType": "address",
                                    "name": "buyToken",
                                    "type": "address"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "payAmount",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "buyAmount",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "deadline",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "bytes32",
                                    "name": "salt",
                                    "type": "bytes32"
                                }
                            ],
                            "internalType": "struct CoinmapDex.Order",
                            "name": "order",
                            "type": "tuple"
                        },
                        {
                            "internalType": "bytes",
                            "name": "signature",
                            "type": "bytes"
                        },
                        {
                            "internalType": "address[]",
                            "name": "paths",
                            "type": "address[]"
                        },
                        {
                            "internalType": "address[]",
                            "name": "feePaths",
                            "type": "address[]"
                        }
                    ],
                    "name": "executeOrder",
                    "outputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "inputs": [],
                    "name": "feeRate",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "inputs": [],
                    "name": "feeTo",
                    "outputs": [
                        {
                            "internalType": "address",
                            "name": "",
                            "type": "address"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "inputs": [
                        {
                            "components": [
                                {
                                    "internalType": "address",
                                    "name": "maker",
                                    "type": "address"
                                },
                                {
                                    "internalType": "address",
                                    "name": "payToken",
                                    "type": "address"
                                },
                                {
                                    "internalType": "address",
                                    "name": "buyToken",
                                    "type": "address"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "payAmount",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "buyAmount",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "deadline",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "bytes32",
                                    "name": "salt",
                                    "type": "bytes32"
                                }
                            ],
                            "internalType": "struct CoinmapDex.Order",
                            "name": "order",
                            "type": "tuple"
                        }
                    ],
                    "name": "hashOrder",
                    "outputs": [
                        {
                            "internalType": "bytes32",
                            "name": "",
                            "type": "bytes32"
                        }
                    ],
                    "stateMutability": "pure",
                    "type": "function"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "maker",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "signer",
                            "type": "address"
                        }
                    ],
                    "name": "isValidSigner",
                    "outputs": [
                        {
                            "internalType": "bool",
                            "name": "",
                            "type": "bool"
                        }
                    ],
                    "stateMutability": "pure",
                    "type": "function"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "",
                            "type": "address"
                        },
                        {
                            "internalType": "bytes32",
                            "name": "",
                            "type": "bytes32"
                        }
                    ],
                    "name": "makerSaltUsed",
                    "outputs": [
                        {
                            "internalType": "bool",
                            "name": "",
                            "type": "bool"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "_feeTo",
                            "type": "address"
                        }
                    ],
                    "name": "onCriticalBug",
                    "outputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "inputs": [],
                    "name": "owner",
                    "outputs": [
                        {
                            "internalType": "address",
                            "name": "",
                            "type": "address"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "inputs": [],
                    "name": "renounceOwnership",
                    "outputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "_feeRate",
                            "type": "uint256"
                        }
                    ],
                    "name": "setFeeRate",
                    "outputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "_feeTo",
                            "type": "address"
                        }
                    ],
                    "name": "setFeeTo",
                    "outputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "inputs": [],
                    "name": "swapRouter",
                    "outputs": [
                        {
                            "internalType": "contract ISwapRouter",
                            "name": "",
                            "type": "address"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "newOwner",
                            "type": "address"
                        }
                    ],
                    "name": "transferOwnership",
                    "outputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "signer",
                            "type": "address"
                        },
                        {
                            "components": [
                                {
                                    "internalType": "address",
                                    "name": "maker",
                                    "type": "address"
                                },
                                {
                                    "internalType": "address",
                                    "name": "payToken",
                                    "type": "address"
                                },
                                {
                                    "internalType": "address",
                                    "name": "buyToken",
                                    "type": "address"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "payAmount",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "buyAmount",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "deadline",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "bytes32",
                                    "name": "salt",
                                    "type": "bytes32"
                                }
                            ],
                            "internalType": "struct CoinmapDex.Order",
                            "name": "order",
                            "type": "tuple"
                        },
                        {
                            "internalType": "bytes",
                            "name": "signature",
                            "type": "bytes"
                        }
                    ],
                    "name": "verify",
                    "outputs": [
                        {
                            "internalType": "bool",
                            "name": "",
                            "type": "bool"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function"
                }
            ]
        }
    }
}