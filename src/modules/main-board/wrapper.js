import React, { Component } from 'react';
import MainBoardComponents from './components'
import { Ladders, Snakes, Players } from 'app/config/data'
class MainBoardWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            diceVal: 0,
            players: Players.slice()   //copying Players data into state
        }
    }

    /**
     * to get player object having turn
    */
    getPlayerWithTurn() {
        return JSON.parse(JSON.stringify(this.state.players.find((player) => {
            return player.turn
        })))
    }


    /**
     * to change players data after turn is finished object having turn
     * @playerWithTurn{ player object with turn }
    */
    getPlayersDataAfterTurn(playerWithTurn) {
        let indexOfPlayerWithTurn = this.state.players.findIndex((player) => {
            return player.id == playerWithTurn.id
        })
        var players = JSON.parse(JSON.stringify(this.state.players));
        players[indexOfPlayerWithTurn] = playerWithTurn
        indexOfPlayerWithTurn = indexOfPlayerWithTurn + 1;   //increasing one to move to next turn
        if (indexOfPlayerWithTurn == players.length) {
            indexOfPlayerWithTurn = 0              //if last player turn is finished start from first player
        }
        players[indexOfPlayerWithTurn].turn = true   //making next player turn as true
        return players
    }

    /**
     * to reset Game which will initialize players data in state
    */
    resetGame() {
        this.setState({
            diceVal: 0,
            players: Players.slice()
        })
    }


    /**
     * method to perform different operation when dice is rolled
    */
    rollDice() {
        const diceVal = Math.floor(Math.random() * (6 - 1 + 1)) + 1;;  //getting random value from 1 to 6
        let playerWithTurn = this.getPlayerWithTurn()   //getting player object with turn
        if (playerWithTurn.position == 0) {
            if (diceVal == 1 || diceVal == 6) {
                playerWithTurn.position = 1
            }
        }
        else {
            if (playerWithTurn.position + diceVal <= 100) {
                playerWithTurn.position = playerWithTurn.position + diceVal
            }
        }
        if (playerWithTurn.position == 100) {
            playerWithTurn.won = true   //declaring player as true when it reaches 100
        }
        playerWithTurn.turn = false
        playerWithTurn.position = this.checkSnakeBitePosition(playerWithTurn.position);   //checking for snake bite
        playerWithTurn.position = this.checkLadderClimbPosition(playerWithTurn.position);   //checking for ladder climb
        const players = this.getPlayersDataAfterTurn(playerWithTurn)
        this.setState({
            diceVal,
            players
        })   //setting state after different operations
    }



    /**
     * to give new position on basis of snake data check
     * @position{ current position }
    */
    checkSnakeBitePosition(position) {
        var snakeBitFound = Snakes.find(function (snake) {
            return snake.from == position
        })
        if (snakeBitFound) {
            return snakeBitFound.to
        }
        return position
    }

    /**
     * to give new position on basis of ladder data check
     * @position{ current position }
    */
    checkLadderClimbPosition(position) {
        var ladderClimbFound = Ladders.find(function (ladder) {
            return ladder.from == position
        })
        if (ladderClimbFound) {
            return ladderClimbFound.to
        }
        return position
    }


    /**
     * to give winner player object
    */
    getWinner() {
        let winner = this.state.players.find((player) => {
            return player.won
        })
        if (winner) {
            return JSON.parse(JSON.stringify(winner))
        }

    }


    /**
     * render method handled by react dom
    */
    render() {
        return (
            <div class="panel panel-success">
                <div class="panel-heading text-center"><h2>Snake and Ladder</h2></div>
                <div class="panel-body">
                    <div class="row">
                        <div class="col-md-5">
                            <MainBoardComponents.GameInfo players={this.state.players} getWinner={() => this.getWinner()} rollDice={() => this.rollDice()} resetGame={() => this.resetGame()} getPlayerWithTurn={() => this.getPlayerWithTurn()} diceVal={this.state.diceVal} ladders={Ladders} snakes={Snakes} />
                        </div>
                        <div class="col-md-7" >
                            <div id="grid-container">
                                <MainBoardComponents.Grid players={this.state.players} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MainBoardWrapper



