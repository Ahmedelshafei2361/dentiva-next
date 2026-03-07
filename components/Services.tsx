import ScrollReveal from './ScrollReveal';
import type { Service } from '@/lib/queries';

const DEFAULT_SERVICES: Service[] = [
  {
    _id: '1',
    title: 'Dull to Dazzling',
    description: 'Restore the natural glow of your smile with our expert Polishing & Brightening treatment this gentle yet effective.',
    duration: '60-120 minutes',
    price: 'starts at $350',
    buttonText: 'BOOK NOW',
  },
  {
    _id: '2',
    title: 'Deep Cleaning',
    description: 'Deep cleaning, also known as scaling and root planning, is a specialized dental procedure designed to treat gum.',
    duration: '50-60 minutes',
    price: 'starts at $140',
    buttonText: 'BOOK NOW',
  },
  {
    _id: '3',
    title: 'Brightening',
    description: 'Rediscover the brilliance of your smile with our professional teeth brightening treatments whether years of coffee.',
    duration: '50-95 minutes',
    price: 'starts at $243',
    buttonText: 'BOOK NOW',
  },
  {
    _id: '4',
    title: 'Smile Flex Aligners',
    description: 'Smile Flex Aligners offer a modern, discreet solution to straighten your teeth without the of traditional of coffee.',
    duration: '60-115 minutes',
    price: 'starts at $300',
    buttonText: 'BOOK NOW',
  },
];

interface ServicesProps {
  services?: Service[];
}

export default function Services({ services }: ServicesProps) {
  const items = services && services.length > 0 ? services : DEFAULT_SERVICES;

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-header">
          <h2><em>Expert Care for Every Tooth</em></h2>
          <p>At our clinic, we believe every tooth deserves expert attention whether it&apos;s a routine.</p>
        </div>

        <div className="services-grid">
          {items.map((service) => (
            <ScrollReveal key={service._id} className="service-card">
              <h3>{service.title}</h3>
              <p className="service-desc">{service.description}</p>
              <p className="service-duration">{service.duration}</p>
              <p className="service-price">{service.price}</p>
              <a href="#" className="btn-primary">{service.buttonText}</a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
