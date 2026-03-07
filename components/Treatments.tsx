import ScrollReveal from './ScrollReveal';

export default function Treatments() {
  return (
    <section className="treatment" id="treatment">
      <div className="container">
        <div className="treatment-header">
          <h2>Select Your Treatment</h2>
          <p>With years of hands-on experience across multiple sectors, we bring deep industry knowledge, technical skill.</p>
        </div>

        <div className="treatment-grid">
          <div className="treatment-images">
            <ScrollReveal className="treatment-card">
              <img src="/images/treatment-1.png" alt="Wisdom Extraction" />
              <span className="card-label">Wisdom Extraction</span>
              <div className="card-text">Wisdom tooth extraction is a common procedure to remove one or more of the third molars — the last set of teeth to emerge.</div>
            </ScrollReveal>
            <ScrollReveal className="treatment-card">
              <img src="/images/treatment-2.png" alt="Tooth Contouring" />
              <span className="card-label">Tooth Contouring</span>
              <div className="card-text">Tooth contouring, also known as enamel shaping, is a quick and painless cosmetic procedure that gently reshapes your.</div>
            </ScrollReveal>
          </div>

          <ScrollReveal className="treatment-list">
            <h4>Other major treatments</h4>
            {['Oral Hygiene', 'Retainer Fitting', 'Periodontal Therapy', 'Dental Sealants', 'Emergency Dentistry', 'Preventive Care', 'Family Dentistry'].map((name) => (
              <a href="#" className="treatment-list-item" key={name}>
                {name} <span className="arrow">→</span>
              </a>
            ))}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
