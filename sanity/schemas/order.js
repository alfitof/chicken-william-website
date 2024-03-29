export default {
  name: 'order',
  title: 'Order',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      option: {
        maxLength: 40,
      },
    },
    {
      name: 'phone',
      title: 'Phone',
      type: 'string',
      option: {
        maxLength: 15,
      },
    },
    {
      name: 'address',
      title: 'Address',
      type: 'string',
      option: {
        maxLength: 100,
      },
    },
    {
      name: 'notes',
      title: 'Notes',
      type: 'string',
      option: {
        maxLength: 100,
      },
    },
    {
      name: 'total',
      title: 'Total',
      type: 'number',
    },
    {
      name: 'status',
      title: 'Status',
      type: 'number',
    },
  ],
}
