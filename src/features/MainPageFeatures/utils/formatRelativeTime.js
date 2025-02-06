export default function formatRelativeTime(timestamp) {
  // Convert Firestore _Timestamp to a JavaScript Date object
  const date = new Date(timestamp.seconds * 1000); // Convert seconds to milliseconds
  const now = new Date();
  const diffInSeconds = Math.floor((now - date) / 1000); // Difference in seconds

  // Define thresholds
  const secondsInMinute = 60;
  const secondsInHour = 60 * secondsInMinute;
  const secondsInDay = 24 * secondsInHour;
  const secondsInWeek = 7 * secondsInDay;
  const secondsInMonth = 30 * secondsInDay; // Approximate month
  const secondsInYear = 365 * secondsInDay; // Approximate year

  // Use switch with true
  switch (true) {
    case diffInSeconds < secondsInHour:
      return `${Math.floor(diffInSeconds / secondsInMinute)}m`; // Minutes
    case diffInSeconds < secondsInDay:
      return `${Math.floor(diffInSeconds / secondsInHour)}h`; // Hours
    case diffInSeconds < secondsInWeek:
      return `${Math.floor(diffInSeconds / secondsInDay)} days`; // Days
    case diffInSeconds < secondsInMonth:
      return `${Math.floor(diffInSeconds / secondsInWeek)} weeks`; // Weeks
    case diffInSeconds < secondsInYear:
      return `${Math.floor(diffInSeconds / secondsInMonth)} months`; // Months
    default: {
      const years = Math.floor(diffInSeconds / secondsInYear);
      return `${years} ${years === 1 ? "year" : "years"}`; // Years
    }
  }
}
