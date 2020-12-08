<template>
  <CoreList
    title="Workouts"
    :headers="headers"
    :items="$store.state.workouts"
  />
</template>

<script>
export default {
  data() {
    return {
      headers: [
        {
          text: '',
          value: 'image',
          align: 'center',
        },
        {
          text: 'Title',
          align: 'start',
          value: 'title',
        },
        {
          text: 'Rating (max 5)',
          align: 'start',
          value: 'rating',
        },
        {
          text: 'Sessions done',
          align: 'start',
          value: 'sessionsCount',
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
