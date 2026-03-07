import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({
      name: 'quote',
      title: 'Quote',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'patientName',
      title: 'Patient Name',
      type: 'string',
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
      initialValue: 'Patient',
    }),
    defineField({
      name: 'avatarInitial',
      title: 'Avatar Initials',
      type: 'string',
      description: 'e.g. "MJ"',
    }),
  ],
});
