const exerciseTimeMins = 40;

// let message = ''

// if (exerciseTimeMins < 30) {
//   message = 'You need to try hard'
// }
// else if (exerciseTimeMins < 60) {
//     message = 'Doing good'
// }
// else {
//     message = 'Excellent work'
// }

const message =
  exerciseTimeMins < 30
    ? "You need to try hard"
    : exerciseTimeMins < 60
      ? "Doing good"
      : "Excellent work";

console.log(message);
