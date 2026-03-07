import { client } from './sanity';

// ---------- Types ----------

export interface Service {
  _id: string;
  title: string;
  description: string;
  duration: string;
  price: string;
  buttonText: string;
}

export interface TreatmentCase {
  _id: string;
  title: string;
  duration: string;
  beforeImage: string;
  afterImage: string;
}

export interface Testimonial {
  _id: string;
  quote: string;
  patientName: string;
  role: string;
  avatarInitial: string;
}

export interface ClinicInfo {
  _id: string;
  cardTitle: string;
  rows: { label: string; value: string; href?: string }[];
}

// ---------- Queries ----------

export async function getServices(): Promise<Service[]> {
  try {
    const data = await client.fetch(`*[_type == "service"] | order(_createdAt asc)`);
    if (data && data.length > 0) return data;
  } catch {
    // Sanity not configured — fall through to defaults
  }
  return [];
}

export async function getTreatmentCases(): Promise<TreatmentCase[]> {
  try {
    const data = await client.fetch(`*[_type == "treatmentCase"] | order(_createdAt asc)`);
    if (data && data.length > 0) return data;
  } catch {
    // fall through
  }
  return [];
}

export async function getTestimonial(): Promise<Testimonial | null> {
  try {
    const data = await client.fetch(`*[_type == "testimonial"][0]`);
    if (data) return data;
  } catch {
    // fall through
  }
  return null;
}

export async function getClinicInfo(): Promise<ClinicInfo[]> {
  try {
    const data = await client.fetch(`*[_type == "clinicInfo"] | order(_createdAt asc)`);
    if (data && data.length > 0) return data;
  } catch {
    // fall through
  }
  return [];
}
