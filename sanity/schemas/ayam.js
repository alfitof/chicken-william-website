export default {
  name: 'ayam',
  type: 'document',
  title: 'ayam',
  fields: [
    {
      name: 'image',
      type: 'image',
      title: 'image',
      option: {
        hotspot: true,
      },
    },
    {
      name: 'name',
      title: 'name',
      type: 'string',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    },
    {
      name: 'price',
      title: 'price',
      type: 'array',
      of: [{type: 'number'}],
    },
    {
      name: 'details',
      title: 'details',
      type: 'string',
    },
  ],
}
