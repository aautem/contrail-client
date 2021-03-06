import React from 'react';
import PropTypes from 'prop-types';
import * as Animatable from 'react-native-animatable';
import { Text, Dimensions } from 'react-native';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

// USE VIEWPORT DIMENSIONS IN ANIMATION SETTINGS
const animateDrop = {
  from: { translateY: -500, opacity: 0.25 },
  to: { translateY: 0, opacity: 1 },
};

export default class GamePiece extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.username && nextProps.username) {
      const ref = `coin-${nextProps.rowId}-${nextProps.colId}`;
      this.refs[ref].transition(animateDrop.from, animateDrop.to, 800, 'ease-out-expo');
    }
  }

  render() {
    const { username, color, rowId, colId, boardSize } = this.props;
    const heightAndWidth = (viewportWidth / boardSize) - 25;

    return (
      <Animatable.View
        ref={`coin-${rowId}-${colId}`}
        style={{
          backgroundColor: color,
          borderRadius: 100,
          height: heightAndWidth,
          width: heightAndWidth,
          alignItems: 'center',
          justifyContent: 'center',
          borderStyle: 'solid',
          borderColor: '#aaa',
          borderWidth: 1,
        }}
      >
        {!this.props.username &&
        <Text style={{ color: '#aaa', fontSize: 10, fontWeight: 'bold' }}>{this.props.points}</Text>}
      </Animatable.View>
    );
  }
}

GamePiece.propTypes = {
  username: PropTypes.string,
  color: PropTypes.string,
  rowId: PropTypes.number,
  colId: PropTypes.number,
  boardSize: PropTypes.number,
  points: PropTypes.number,
};