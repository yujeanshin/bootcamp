import React from 'react';
import { Link } from 'react-router-dom';

/*
    Specifications:
        iterate through cards
        click to flip from front to back and back to front
        index that tells what card #
        no empty cards
*/

class CardViewer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            flipped: false,
            index: 0,
        };
    }

    flipCard = () => {
        this.setState((prevState) => ({
            flipped: !prevState.flipped,
        }));
    };

    nextCard = () => {
        const { cards } = this.props;
        const { index } = this.state;
        if (index !== cards.length - 1) {
            this.setState((prevState) => ({
                index: (prevState.index + 1),
                flipped: false,
            }));
        }
    };

    prevCard = () => {
        const { cards } = this.props;
        const { index } = this.state;
        if (index !== 0) {
            this.setState((prevState) => ({
                index: (prevState.index - 1 + cards.length),
                flipped: false,
            }));
        }
    };

    render() {
        const { cards } = this.props;
        const { index, flipped } = this.state;
        const card = cards[index];

        return (
            <div>
                <h2>Card Viewer</h2>
                <table>
                    <tbody>
                        <tr>
                            <td onClick={this.flipCard}>
                                {flipped ? card.back : card.front}
                            </td>
                        </tr>
                    </tbody>
                </table>
                <p>Card {index + 1} of {cards.length}</p>
                <div>
                    <button onClick={() => this.prevCard()}>Previous</button>
                    <button onClick={() => this.nextCard()}>Next</button>
                </div>
                <hr />
                <Link to="/editor">Go to card editor</Link>
            </div>
        );
    }
}

export default CardViewer;
