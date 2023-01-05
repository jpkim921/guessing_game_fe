#Guessing Game
A simple guessing game that uses a smart contract as the house.

In this guessing game a player first connects their wallet and pays ante to start the game.
This game is event driven from the emiited events from the contract which is the House.
When a player pays the ante, we filter for the `AntePaid` event which allows React the route to the Player page.

The player can then pay an ante of 0.00025 ETH and when that is confirmed, we move on a game of 5 rounds.
Round one is a choice between the numbers 1 and 2 which the player selects and confirms submission through their wallet.
In the following rounds, the choices keep doubling until Round 5 where the choices range from 1 to 32.

When a player wins a round, then move on and win a certain amount of ETH. Game ends when the choice doesn't match.

#Thoughs
Initially, I started this project to refresh my knowledge of React, Hardhat, and the interaction between the client and smart contract. There was definitely a moment where I thought I forgot too much but it all came back rather quickly.

This is pretty rough and I can improve upon this a lot. I don't like the way I have to confirm every submission through the wallet. I think this type of game would be best to mix off-chain and on-chain solution.



# Getting Started  

Need to have hardhat running for the local environment. [GuessingGame SC](https://github.com/jpkim921/guessing_game)
Once you have localhost running, in the project directory, you can the below and click connect to start.
When connecting the wallet, make sure to have a custom hardhat network in the network list. 

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.



