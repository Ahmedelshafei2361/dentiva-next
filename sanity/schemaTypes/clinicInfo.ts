import { defineType, defineField, defineArrayMember } from 'sanity';

export default defineType({
  name: 'clinicInfo',
  title: 'Clinic Info',
  type: 'document',
  fields: [
    defineField({
      name: 'cardTitle',
      title: 'Card Title',
      type: 'string',
      description: 'e.g. "Opening Hours", "Office Location", "Service Location"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'rows',
      title: 'Info Rows',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'label', title: 'Label', type: 'string' }),
            defineField({ name: 'value', title: 'Value', type: 'string' }),
            defineField({
              name: 'href',
              title: 'Link (optional)',
              type: 'string',
              description: 'URL, tel:, or mailto: link',
            }),
          ],
        }),
      ],
    }),
  ],
});
