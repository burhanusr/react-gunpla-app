import { Hero, Carousel, Headline } from '../../components';
import { Benefit, Gallery, Milestones } from './components';

function index() {
  return (
    <>
      <main>
        <Hero />
        <Milestones />
        <Carousel />
        <Benefit />
        <Headline
          heading={'Ready to Embark on your Gundam Odyssey?'}
          description={
            <>
              Buckle up as you navigate through the digital frontier of Japanese
              mecha warfare. Unleash the power of Gundams, witness epic battles,
              and embark on a journey that transcends the boundaries of fiction.
              <br />
              <br />
              Gear up, pilot – the Gundam Universe awaits you!
            </>
          }
        />
        <Gallery />
      </main>
    </>
  );
}

export default index;
