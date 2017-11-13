export default function getInitialState() {
  return {
    app: {
      config: null,
      onlineCount: 0,
      playersOnline: [],
      page: 'auth', // auth | menu | game | solo | test
      loading: false,
      loaded: false,
      error: null,
    },
    auth: {
      page: 'login', // login | signup | forgot-password
      loading: false,
      loaded: false,
      error: null,
    },
    user: {
      id: null,
      username: null,
      avatarUrl: null,
      inGame: false,
      showModal: false,
      loading: false,
      loaded: false,
      error: null,
    },
    settings: {
      boardSize: 4, // 4 | 5 | 6
      timeLimit: false,
      color: '#5B08C6',
      altColor: '#000BFC',
      showModal: false,
      loading: false,
      loaded: false,
      error: null,
    },
    stats: {
      wins: 0,
      losses: 0,
      draws: 0,
      totalPoints: 0,
      winsByDefault: 0,
      winsByPoints: 0,
      winsByConnect: 0,
      gamesPlayed: 0,
      loading: false,
      loaded: false,
      error: null,
    },
    game: {
      mode: null, // online | solo
      roomName: null,
      boardSize: null,
      timeLimit: null,
      winner: null,
      draw: false,
      gameOver: false,
      winByConnect: false,
      winByPoints: false,
      board: null,
      boardPoints: null,
      players: null,
      turn: null,
      disconnection: false,
      showRequestModal: false,
      showResultsModal: false,
      loading: false,
      loaded: false,
      error: null,
    },
    leaderboard: {
      data: [], // Array of stats objects
      loading: false,
      loaded: false,
      error: null,
    },
    messages: {
      data: [], // Array of message objects
      loading: false,
      loaded: false,
      error: null,
    },
    friends: {
      data: [], // Array of friend objects
      onlineCount: 0,
      loading: false,
      loaded: false,
      error: null,
    },
  };
}