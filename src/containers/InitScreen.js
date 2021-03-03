import Header from './Header';
import InitBody from './InitBody';
import Footer from './Footer';

const InitScreen = (props) => {
  return(
    <div className="initScreen">
      <Header />
      <InitBody
        startGame={props.startGame}
      />
      <Footer />
    </div>
  )
}

export default InitScreen;
