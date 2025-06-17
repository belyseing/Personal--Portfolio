import Head from 'next/head';
import Header from '../components/Header';
import Home from '../components/Home';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-darkBlue text-white font-sans">
      <Head>
        <title>Ingabire Belyse - Portfolio</title>
        <meta
          name="description"
          content="Professional portfolio of Ingabire Belyse, showcasing skills, projects, and achievements."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Home />
      <About />
       <Skills/>
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
