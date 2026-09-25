import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    defineField({
      name: 'company',
      title: 'Company',
      type: 'string',
    }),
    defineField({
      name: 'title',
      title: 'Job Title',
      type: 'string',
    }),
    defineField({
      name: 'period',
      title: 'Period (e.g., Nov 2021 - Present)',
      type: 'string',
    }),
    defineField({
      name: 'tech',
      title: 'Technologies',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'bullets',
      title: 'Key Responsibilities',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'orderIndex',
      title: 'Order Index',
      type: 'number',
      description: 'Lower number appears first',
      initialValue: 0,
    }),
  ],
})
