export default () => ({
  user: null,
  channel: null,
  workouts: [],
  muscleGroups: [],
  workoutStyles: [],
  equipments: [],
  exercices: [],
  channelStats: {
    chartYearData: {
      labels: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ],
      datasets: [
        {
          label: 'Yearly',
          pointBackgroundColor: '#FFF',
          borderColor: '#2196F3',
          fill: false,
          borderWidth: 2.5,
          data: [40, 20, 30, 80, 77],
        },
      ],
    },
    chartmonthData: {
      labels: Array(31)
        .fill(1)
        .map((x, y) => x + y),
      datasets: [
        {
          label: 'Monthly',
          pointBackgroundColor: '#FFF',
          borderColor: '#2196F3',
          fill: false,
          borderWidth: 2.5,
          data: [40, 20, 30, 80, 77, 45, 78, 36, 55],
        },
      ],
    },
    chartWeekData: {
      labels: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      datasets: [
        {
          label: 'Weekly',
          pointBackgroundColor: '#FFF',
          borderColor: '#2196F3',
          fill: false,
          borderWidth: 2.5,
          data: [40, 20, 30, 80, 77, 2, 8],
        },
      ],
    },
    chartWorkoutStyleData: {
      labels: ['Style 1', 'Style 2', 'Style 3', 'Style 4'],
      datasets: [
        {
          label: 'Workout Styles',
          pointBackgroundColor: '#FFF',
          backgroundColor: 'rgba(144, 202, 249, .7)',
          borderColor: '#2196F3',
          data: [40, 20, 15, 78],
        },
      ],
    },
    chartMuscleGroupData: {
      labels: ['Muscle grp 1', 'Muscle grp 2', 'Muscle grp 3', 'Muscle grp 4'],
      datasets: [
        {
          label: 'Muscle Groups',
          pointBackgroundColor: '#FFF',
          backgroundColor: 'rgba(144, 202, 249, .7)',
          borderColor: '#2196F3',
          data: [10, 30, 35, 76],
        },
      ],
    },
    chartEquipmentData: {
      labels: ['Equipment 1', 'Equipment 2', 'Equipment 3'],
      datasets: [
        {
          label: 'Equipments',
          pointBackgroundColor: '#FFF',
          backgroundColor: 'rgba(144, 202, 249, .7)',
          borderColor: '#2196F3',
          data: [2, 50, 30],
        },
      ],
    },
    topWorkouts: [
      {
        id: 1,
        title: 'workout 1',
        image: 'https://picsum.photos/500/300?image=15',
      },
      {
        id: 2,
        title: 'workout 2',
        image: 'https://picsum.photos/500/300?image=15',
      },
      {
        id: 3,
        title: 'workout 3',
        image: 'https://picsum.photos/500/300?image=15',
      },
    ],
    lastWorkouts: [
      {
        id: 4,
        title: 'workout 4',
        image: 'https://picsum.photos/500/300?image=15',
      },
      {
        id: 5,
        title: 'workout 5',
        image: 'https://picsum.photos/500/300?image=15',
      },
      {
        id: 6,
        title: 'workout 6',
        image: 'https://picsum.photos/500/300?image=15',
      },
    ],
  },
})
