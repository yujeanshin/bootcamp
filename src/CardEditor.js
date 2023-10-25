import React from 'react';
import './CardEditor.css';

class CardEditor extends React.Component {
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
                <input placeholder="Front of the card" />
                <input placeholder="Back of the card" />
                <button>Add card</button>
            </div>
        );
    }
}

export default CardEditor;

// 10:30 of https://www.youtube.com/watch?v=vxBOxks1Wps