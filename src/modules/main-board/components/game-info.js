import React, { Component } from 'react';

class GameInfo extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {players, getWinner, rollDice, resetGame, getPlayerWithTurn, diceVal, ladders, snakes} = this.props;
        return (
            <div>
                <ul class="list-group">
                    {
                        players.map(function (player) {
                            return <li key={player.id} class="list-group-item"><img class="horizontal-gap" src={player.icon} /><p class="horizontal-gap" style={{ display: 'inline-block' }}>{player.name}</p><span class="badge horizontal-gap">{player.position}</span></li>
                        })
                    }
                    <li class="list-group-item">
                        Snakes
                        {

                            snakes.map(function (snake, index) {
                                return <div key={index}>[{snake.from},{snake.to}]</div>
                            })

                        }
                    </li>
                    <li class="list-group-item">
                        Ladders
                        {

                            ladders.map(function (ladder, index) {
                                return <div key={index}>[{ladder.from},{ladder.to}]</div>
                            })

                        }
                    </li>
                </ul>
                {
                    getWinner() ?
                        <button type="button" class="btn btn-default btn-md" disabled onClick={() => rollDice()}>
                            <span class="glyphicon glyphicon-star" aria-hidden="true"></span>
                            Roll Dice
                                </button> :
                        <button type="button" class="btn btn-default btn-md" onClick={() => rollDice()}>
                            <span class="glyphicon glyphicon-star" aria-hidden="true"></span>
                            Roll Dice
                                </button>
                }
                <button type="button" class="btn btn-default btn-md" onClick={() => resetGame()}>
                    <span class="glyphicon glyphicon-repeat" aria-hidden="true"></span>
                    Reset
                            </button>
                <br />
                <br /><br />
                <p style={{ fontWeight: 'bold' }}>Next Turn:{
                    getPlayerWithTurn().name
                }</p>
                <p style={{ fontWeight: 'bold' }}>Dice value:{diceVal}</p>
                {
                    getWinner() ? <div class="alert alert-success" role="alert">{getWinner().name} : WON</div> : null
                }
            </div>
        );
    }
}

export default GameInfo;