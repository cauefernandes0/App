import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'featured',
  title: 'Prestadores em Destaque',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Nome',
      validation: rule => rule.required(),
    },
    {
      name: 'description',
      type: 'string',
      title: 'Descrição ',
      validation: rule => rule.max(200),
    },
    {
      name: 'prestadores',
      type: 'array',
      title: 'Prestadores',
      of: [{type: 'reference', to: [{type: 'option'}]}]

    }
  ],
})
