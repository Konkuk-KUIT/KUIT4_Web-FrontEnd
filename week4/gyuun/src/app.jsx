import React from 'react';
import Home from './Home';
import blackboxImage from './assets/blackbox.svg';
import signalImage from './assets/signal.svg';
import tranImage from './assets/tran.svg';
import seeImage from './assets/see.svg';
import vectorImage from './assets/vector.svg';
import vectorsImage from './assets/vectors.svg';
import comment from './assets/comment.svg';
import heart from './assets/heart.svg';
import plus from './assets/plus.svg';
import homein from './assets/home_indicator.svg';

const App = () => {
  return (
    <Home
      blackboxImage={blackboxImage}
      signalImage={signalImage}
      tranImage={tranImage}
      seeImage={seeImage}
      vectorImage={vectorImage}
      vectorsImage={vectorsImage}
      comment={comment}
      heart={heart}
      plus={plus}
      homein={homein}
    />
  );
};

export default App;
