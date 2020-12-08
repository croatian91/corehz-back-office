<template>
  <CoreList
    title="Equipments"
    :headers="headers"
    :items="$store.state.equipments"
  />
</template>

<script>
export default {
  data() {
    return {
      headers: [
        {
          text: 'Title',
          align: 'start',
          value: 'title',
        },
        {
          text: 'Creation date',
          align: 'start',
          value: 'createdAt',
        },
        {
          text: 'Update date',
          align: 'start',
          value: 'updatedAt',
        },
        {
          text: 'Actions',
          align: 'start',
          value: 'actions',
          sortable: false,
        },
      ],
    }
  },
}
</script>
