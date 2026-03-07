import ScrollReveal from './ScrollReveal';
import type { Testimonial } from '@/lib/queries';

const DEFAULT_TESTIMONIAL: Testimonial = {
  _id: 'default',
  quote: '"A highly skilled and compassionate dentist with years of experience in delivering exceptional dental care. Known for a gentle touch and a patient-first approach."',
  patientName: 'Maicale Jack',
  role: 'Patient',
  avatarInitial: 'MJ',
};

interface DoctorProps {
  testimonial?: Testimonial | null;
}

export default function Doctor({ testimonial }: DoctorProps) {
  const t = testimonial || DEFAULT_TESTIMONIAL;

  return (
    <section className="doctor-section" id="doctor-section">
      <div className="container">
        <div className="doctor-grid">
          <ScrollReveal className="doctor-image">
            <img src="/images/doctor.png" alt="Dr. Professional Dentist" />
          </ScrollReveal>
          <ScrollReveal className="doctor-content">
            <h2>Flexible Scheduling That Works for You</h2>
            <p>At our clinic, we understand that life can be busy — that&apos;s why we offer flexible scheduling options designed lifestyle.</p>

            <div className="testimonial">
              <blockquote>{t.quote}</blockquote>
              <div className="testimonial-author">
                <div className="testimonial-author-avatar">{t.avatarInitial}</div>
                <div className="testimonial-author-info">
                  <strong>{t.patientName}</strong>
                  <span>{t.role}</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
