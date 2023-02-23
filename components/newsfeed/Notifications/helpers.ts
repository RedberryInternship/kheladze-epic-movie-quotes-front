export const calculateTime = (dateToModify: Date) => {
  const yourDate: Date = new Date(dateToModify);
  const currentDate: Date = new Date();

  const diffInMilliseconds: number = currentDate.getTime() - yourDate.getTime();
  const diffInMinutes: number = Math.round(diffInMilliseconds / 1000 / 60);
  let timeElapsed: string = "";

  if (diffInMinutes < 60) {
    timeElapsed = `${diffInMinutes} minute${diffInMinutes === 1 ? "" : "s"}`;
  } else if (diffInMinutes < 1440) {
    const diffInHours: number = Math.floor(diffInMinutes / 60);
    timeElapsed = `${diffInHours} hour${diffInHours === 1 ? "" : "s"}`;
  } else {
    const diffInDays: number = Math.floor(diffInMinutes / 1440);
    timeElapsed = `${diffInDays} day${diffInDays === 1 ? "" : "s"}`;
  }
  return `${timeElapsed} ago`;
};
