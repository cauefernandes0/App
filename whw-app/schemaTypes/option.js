import {defineField, defineType} from 'sanity'

export default {
  name: 'option',
  title: 'Prestadores',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Nome do Prestador',
      validation: rule => rule.required(),
    },
    {
      name: 'description',
      type: 'string',
      title: 'Descrição do Prestador',
      validation: rule => rule.max(200),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Imagem do Prestador',
    },
    {
      name: 'lat',
      type: 'number',
      title: 'Latitude do Profissional',
    },
    {
        name: 'lnt',
        type: 'number',
        title: 'Longitude do Profissional',
      },
      {
        name: 'adress',
        type: 'string',
        title: 'Endereço do Prestador',
        validation: rule => rule.required(),
      },
      {
        name: 'rating',
        type: 'number',
        title: 'Coloque um número de 1 a 5',
        validation: rule => rule.required().min(1).max(5).error("ERRO! Coloque um número de 1 a 5")
      },
      {
        name: 'reviews',
        type: 'string',
        title: 'Avaliações',
      },
      {
        name: 'type',
        title: 'Categoria',
        validation: rule => rule.required(),
        type: 'reference',
        to: [{type: 'category'}]
      },
      {
        name: 'work',
        type: 'array',
        title: 'Serviços',
        of: [{type: 'reference', to: [{type: 'workschema'}]}]
      },
  ],
}
