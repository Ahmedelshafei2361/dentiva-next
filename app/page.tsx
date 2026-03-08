export const revalidate = 10

import PromoBar from '@/components/PromoBar';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Services from '@/components/Services';
import Treatments from '@/components/Treatments';
import BeforeAfter from '@/components/BeforeAfter';
import Doctor from '@/components/Doctor';
import ClinicInfo from '@/components/ClinicInfo';
import Footer from '@/components/Footer';

import {
  getServices,
  getTreatmentCases,
  getTestimonial,
  getClinicInfo,
} from '@/lib/queries';

export default async function HomePage() {
  // Fetch CMS data in parallel — gracefully falls back when Sanity is not configured
  const [services, treatmentCases, testimonial, clinicInfo] = await Promise.all([
    getServices(),
    getTreatmentCases(),
    getTestimonial(),
    getClinicInfo(),
  ]);

  return (
    <>
      <PromoBar />
      <Navbar />
      <Hero />
      <Stats />
      <Services services={services} />
      <Treatments />
      <BeforeAfter cases={treatmentCases} />
      <Doctor testimonial={testimonial} />
      <ClinicInfo cards={clinicInfo} />
      <Footer />
    </>
  );
}
