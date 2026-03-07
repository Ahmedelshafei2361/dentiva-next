import ScrollReveal from './ScrollReveal';
import type { ClinicInfo as ClinicInfoType } from '@/lib/queries';

const DEFAULT_CARDS: ClinicInfoType[] = [
  {
    _id: 'hours',
    cardTitle: 'Opening Hours',
    rows: [
      { label: 'Monday - Friday', value: '09:00-18:00' },
      { label: 'Saturday', value: '10:00-16:00' },
      { label: 'Sunday', value: 'Closed' },
    ],
  },
  {
    _id: 'office',
    cardTitle: 'Office Location',
    rows: [
      { label: 'Place', value: 'By the High School.', href: '#' },
      { label: 'Number', value: '(555) 555-0123', href: 'tel:5555550123' },
      { label: 'Email', value: 'contact@example.com', href: 'mailto:contact@example.com' },
    ],
  },
  {
    _id: 'service-loc',
    cardTitle: 'Service Location',
    rows: [
      { label: 'Place', value: 'SmileCare Dental Studio', href: '#' },
      { label: 'Number', value: '(123) 456-7890', href: 'tel:1234567890' },
      { label: 'Email', value: 'services@example.com', href: 'mailto:services@example.com' },
    ],
  },
];

interface ClinicInfoProps {
  cards?: ClinicInfoType[];
}

export default function ClinicInfo({ cards }: ClinicInfoProps) {
  const items = cards && cards.length > 0 ? cards : DEFAULT_CARDS;

  return (
    <section className="clinic-section" id="clinic">
      <div className="container">
        <div className="clinic-hero">
          <img src="/images/clinic-interior.png" alt="Modern dental clinic interior" />
          <div className="clinic-hero-overlay">
            <div className="clinic-cta-area">
              <div className="cta-items">
                <h4>Smile With Confidence</h4>
                <p>Smile with confidence knowing your teeth are healthy, bright, and beautifully cared for whether you&apos;re.</p>
              </div>
              <div className="cta-items">
                <h4>Family-Friendly Clinic</h4>
                <p>Our expert dental team is here to help you achieve a smile you&apos;re proud to show off from whitening.</p>
              </div>
              <div className="cta-items">
                <h4>Personalized Care Plans</h4>
                <p>We offer personalized solutions designed to enhance both your appearance and self-esteem let us help.</p>
              </div>
            </div>

            <div className="clinic-cta-area" style={{ background: 'var(--brand)', color: 'white', justifyContent: 'space-between' }}>
              <p style={{ color: 'white', fontWeight: 500 }}>Curious about cavity prevention? Just ask!</p>
              <a href="#" className="btn-primary" style={{ background: 'white', color: 'var(--brand)' }}>Reserve Your Spot Now</a>
            </div>
          </div>
        </div>

        <div style={{ height: '120px' }}></div>

        <div className="clinic-info-cards">
          {items.map((card) => (
            <ScrollReveal key={card._id} className="info-card">
              <h4>{card.cardTitle}</h4>
              {card.rows.map((row, i) => (
                <div className="info-card-row" key={i}>
                  <span className="label">{row.label}</span>
                  <span className="value">
                    {row.href ? <a href={row.href}>{row.value}</a> : row.value}
                  </span>
                </div>
              ))}
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
