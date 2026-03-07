import ScrollReveal from './ScrollReveal';
import type { TreatmentCase } from '@/lib/queries';

const DEFAULT_CASES: { _id: string; title: string; beforeSrc: string; afterSrc: string }[] = [
  { _id: 'ba1', title: '60-Min Whitening | 2+ Shape Jump', beforeSrc: '/images/before-teeth.png', afterSrc: '/images/after-teeth.png' },
  { _id: 'ba2', title: '50-Min Whitening | 3+ Shape Jump', beforeSrc: '/images/before-teeth.png', afterSrc: '/images/after-teeth.png' },
  { _id: 'ba3', title: '40-Min Whitening | 5+ Shape Jump', beforeSrc: '/images/before-teeth.png', afterSrc: '/images/after-teeth.png' },
];

interface BeforeAfterProps {
  cases?: TreatmentCase[];
}

export default function BeforeAfter({ cases }: BeforeAfterProps) {
  // For CMS images we'd use urlFor(); for now use local images
  const items = cases && cases.length > 0
    ? cases.map((c) => ({ _id: c._id, title: c.title, beforeSrc: '/images/before-teeth.png', afterSrc: '/images/after-teeth.png' }))
    : DEFAULT_CASES;

  return (
    <section className="before-after" id="before-after">
      <div className="container">
        <div className="section-header">
          <h2><em>Expert Care for Every Tooth</em></h2>
        </div>

        <div className="ba-grid">
          {items.map((item) => (
            <ScrollReveal key={item._id} className="ba-card">
              <div className="ba-image-wrapper">
                <img src={item.beforeSrc} alt="Before treatment" />
                <span className="ba-label">Before</span>
              </div>
              <div className="ba-image-wrapper">
                <img src={item.afterSrc} alt="After treatment" />
                <span className="ba-label">After</span>
              </div>
              <div className="ba-info">{item.title}</div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
