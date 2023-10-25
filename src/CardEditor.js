import React from 'react';
import './CardEditor.css';

class CardEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = { front: '', back: '' };
    }
    render() {
        const cards = this.props.cards.map((card, index) => {
            return (
                <tr key={index}>
                    <td>{card.front}</td>
                    <td>{card.back}</td>
                    <td>
                        <button>Delete card</button>
                    </td>
                </tr>
            );
        });

        return (
            <div>
                <h2>Card Editor</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Front</th>
                            <th>Back</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>{cards}</tbody>
                </table>
                <br/>
                <input placeholder="Front of the card" value={this.state.front}/>
                <input placeholder="Back of the card" value={this.state.back}/>
                <button>Add card</button>
            </div>
        );
    }
}

export default CardEditor;

// 11:30 of https://www.youtube.com/watch?v=vxBOxks1Wps