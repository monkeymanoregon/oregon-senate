import Image from "next/image";

export default function About() {
  return (
    <div style={{ paddingTop: '80px' }}>
      <section className="about section-padding">
        <div className="container about-grid">
          <div className="hero-image-wrapper">
            <div className="hero-image-bg" style={{ transform: 'rotate(3deg)', background: 'linear-gradient(135deg, rgba(5, 150, 105, 0.1) 0%, rgba(30, 58, 138, 0.1) 100%)' }}></div>
            <div className="hero-image-container" style={{ border: '4px solid var(--bg-white)' }}>
              <Image
                src="/candidate_about.jpg"
                alt="Tysan Campaign Headshot"
                width={400}
                height={400}
                className="hero-image"
              />
            </div>
          </div>
          <div className="about-text">
            <h2 className="section-title left-align">The Promise of Representation</h2>
            <p style={{ marginTop: '1.5rem' }}>
              For too long, politicians have entered office to push their own agendas, follow party lines, or spend their time dialing for dollars. They vote based on backroom deals rather than the actual will of their constituents.
            </p>
            <p>
              I believe a representative's job is to represent, not to dictate. That's why I'm running on a unique platform: my personal opinion doesn't matter. My votes in the Senate will be determined directly by the majority of the people I represent.
            </p>
            <div className="about-quote">
              "A politician's job shouldn't be about raising money or forcing a personal agenda. It should be about listening to the majority and casting votes accordingly. That is how a real democracy should work."
            </div>
            <p>
              As a digital marketing, SEO, and AI specialist, I have the exact tools and expertise needed to build out this campaign rapidly. I am deploying this technology to amplify your voices at an unprecedented rate, ensuring the message that <em>you</em> want heard is exactly what reaches the Senate floor.
            </p>
            <p>
              We will utilize secure, modern online tools alongside classic, face-to-face town halls to ensure every voter has a direct say on upcoming bills. I won't make my time in office about fundraising or campaign posturing. I will spend it listening to you.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
