import Image from "next/image";
import Link from "next/link";

export default function AboutMe() {
  return (
    <div style={{ paddingTop: '80px' }}>
      <section className="about section-padding">
        <div className="container about-grid">
          <div className="hero-image-wrapper">
            <div className="hero-image-bg" style={{ transform: 'rotate(-3deg)', background: 'linear-gradient(135deg, rgba(30, 58, 138, 0.1) 0%, rgba(5, 150, 105, 0.1) 100%)' }}></div>
            <div className="hero-image-container" style={{ border: '4px solid var(--bg-white)' }}>
              <Image
                src="/candidate_casual.jpg"
                alt="Tysan"
                width={400}
                height={500}
                className="hero-image"
                style={{ objectPosition: 'top' }}
              />
            </div>
          </div>
          <div className="about-text">
            <h2 className="section-title left-align">Meet Tysan</h2>
            <p className="section-subtitle left-align" style={{ marginBottom: '2rem' }}>
              A native Oregonian, AI expert, and advocate for absolute democratic representation.
            </p>
            
            <p>
              I am an Oregon resident—born here, raising my kids here, with deep family roots across the state. It is important to me that we are represented as a whole.
            </p>
            <p>
              Professionally, I am part-owner of a digital marketing agency and an AI expert. I know how to get information out on the internet quickly, but more importantly, I know how to communicate well with large amounts of people and make complex information accessible.
            </p>
            
            <div className="about-quote" style={{ borderLeftColor: 'var(--primary)' }}>
              "A democracy shouldn't be about the representative's opinion. You leave your opinion at the door when you are representing for the greater good."
            </div>

            <p>
              When I talk to people across the district with entirely different opinions, one consensus always emerges: <strong>people are tired of representatives saying they're going to represent them, and then only representing their personal interests.</strong>
            </p>
            <p>
              That's why I am running this campaign. My opinions get left at the door. I am using my expertise in digital tools and AI to give people new ways to communicate their opinions—ways they don't currently have. And then, I vote strictly on behalf of the people.
            </p>
            <p>
              There is no perfect process, but I will listen, and we will continuously improve the process. Communication is the key.
            </p>

            <div style={{ marginTop: '2.5rem' }}>
              <Link href="/platform" className="btn btn-primary" style={{ marginRight: '1rem' }}>
                Read The Platform Promise
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
