import React from 'react';

/*
    Specifications:
        iterate through cards
        click to flip from front to back and back to front
        index that tells what card #
        no empty cards
*/

class CardViewer extends React.Component {
    render() {
        return (
            <div>
                <h2>Card Viewer</h2>
                <hr />
                <button onClick={this.props.switchMode}>Go to card editor</button>
            </div>
        );
    }
}

export default CardViewer;