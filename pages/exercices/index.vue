<template>
  <CoreList
    title="Exercices"
    :headers="headers"
    :items="$store.state.exercices"
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
