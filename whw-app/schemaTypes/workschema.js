import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'workschema',
  title: 'Trabalhos Ofereçidos',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Nome do Serviço',
      validation: rule => rule.required(),
    },
    {
      name: 'description',
      type: 'string',
      title: 'Descrição do Serviço',
      validation: rule => rule.required(),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Imagem do Serviço',

    },
    {
        name: 'price',
        type: 'number',
        title: 'Preço do Serviço em R$',
  
    },
  ],
})
