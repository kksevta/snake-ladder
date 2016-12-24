import React, { Component } from 'react';
import Block from './block'
import lodash from 'lodash'
class Grid extends Component {
    constructor(props) {
        super(props);
        this.noOfBlocks = 100;
        this.blocks = []
    }
    componentWillMount() {
        for (var i = 0; i < this.noOfBlocks; i++) {
            this.blocks.push(i + 1)
        }
    }
    render() {
        const {players} = this.props;
        return (
            <span>
                {
                    this.blocks.map((blockNo) => {
                        var found = lodash.filter(players, (player) => {
                            return player.position == blockNo
                        })
                        var content = {
                            text: blockNo,
                            icons: []
                        }
                        if (found) {
                            for (var i = 0; i < found.length; i++) {
                                content.icons.push(found[i].icon)
                            }
                        }
                        return (
                            <Block key={blockNo} content={content}></Block>
                        )
                    })
                }
            </span>
        );
    }
}
export default Grid;
