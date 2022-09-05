import Head from 'next/head';
import Navbar from '../components/Navbar';

function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 data-cy="pageTitle" className="title">
              About
            </h1>
            <p className="description">
              "Ha ha! Wow!" - that's what you'll be like, if you elect to employ
              me. I am proficient in glorp.gn, sneeble, plipgrub & crandle.
              These are all Forbidden Technologies, so chances are you won't
              have heard of them. But they're real great - trust me.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
