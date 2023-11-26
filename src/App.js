import React from 'react';
import CardEditor from './CardEditor';
import CardViewer from './CardViewer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        { front: 'front1', back: 'back1' },
        { front: 'front2', back: 'back2' }
      ],
      editor: true,
    };
  }
  
  addCard = card => {
    if (card.front.trim() !== "" && card.back.trim() !== "") {
      const cards = this.state.cards.slice().concat(card);
      this.setState({ cards });
    }
  }

  deleteCard = index => {
    const cards = this.state.cards.slice();
    cards.splice(index, 1);
    this.setState({ cards });
  }

  switchMode = () => this.setState({ editor: !this.state.editor });

  render () {
    if (this.state.editor) {
      return (
        <CardEditor
          addCard={this.addCard}
          cards={this.state.cards}
          deleteCard={this.deleteCard}
          switchMode={this.switchMode}
        />
      );
    } else {
      return <CardViewer switchMode={this.switchMode} cards={this.state.cards}/>;
    }
  }
}

export default App;
