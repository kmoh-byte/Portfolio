export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__grid">
        <div className="hero__main">
          <p className="hero__kicker">independent developer, since 2023</p>
          <h1 className="hero__title">
            AI, PC tuning, and low latency input, <em>and embedded systems.</em>
          </h1>
          <p className="hero__lede">
            I make small, sharp tools for people who care about how things feel. A
            local first AI assistant, a full gaming optimization platform, a gamepad
            latency lab, and a hands-off mouse utility.
          </p>
        </div>

        <aside className="hero__aside">
          <div className="hero__meta">
            <span className="hero__meta-key">location</span>
            <span className="hero__meta-val">remote worldwide</span>
          </div>
          <div className="hero__meta">
            <span className="hero__meta-key">stack</span>
            <span className="hero__meta-val">TypeScript · C++ · WebGPU · React</span>
          </div>
          <div className="hero__meta">
            <span className="hero__meta-key">focus</span>
            <span className="hero__meta-val">local AI · input latency · PC tuning</span>
          </div>
          <div className="hero__meta">
            <span className="hero__meta-key">currently</span>
            <span className="hero__meta-val">shipping a local first AI chat</span>
          </div>
        </aside>
      </div>
    </section>
  );
}
