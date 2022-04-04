// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import './passport.sol';

contract CitizenAct {
    
    event VoteCast(address indexed voter, uint256 indexed daoVote);

    struct Question {
        string question;
        string answer;
        uint256 voteCount;
    }

    struct VoteSystem {
        address voter;
        bytes32 question;
        int40 votes;
    }

    mapping  (address => mapping (bytes32 => uint80)) voteRegistry;
    

    function vote(bytes32 question, address voter) public {
        voteRegistry[voter][question]++;
        VoteCast(voter, question);
    }


    function getVote(address voter, bytes32 question) public view returns (uint80) {
        return voteRegistry[voter][question];
    }

    
}