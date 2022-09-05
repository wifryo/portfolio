import Head from 'next/head';
import Navbar from '../components/Navbar';

function Portfolio() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 data-cy="pageTitle" className="title">
              Portfolio
            </h1>
            <p className="description">
              Please witness the grandeur of my development efforts thus far.
              Breaks every 20 minutes are recommended for those of weak
              constitution (duo to excessive grandiosity).
            </p>

            <div className="portfolio-wrapper">
              <div className="portfolio-item">
                <img src="/sandwich.jpg" className="portfolio-image" alt="" />

                <h4 className="portfolio-name">Successfully Eaten Sandwich</h4>
                <div className="portfolio-category">Snacks</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
