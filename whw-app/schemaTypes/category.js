import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'category',
  title: 'Categoria',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Nome da Categoria',
      validation: rule => rule.required(),
    },
    {
      name: 'description',
      type: 'string',
      title: 'Descrição da Categoria',
      validation: rule => rule.required(),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Imagem da categoria',

    }
  ],
})
