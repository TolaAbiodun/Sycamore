export const createInitials = (user: string) => {
  const first_init = user?.charAt(0)?.toUpperCase();
  const second_init = user?.split(' ')[1]?.charAt(0)?.toUpperCase();
  return `${first_init}${second_init}`;
};

export const getRandomColor = (arr: string[]) => {
  // get random index value
  const randomIndex = Math.floor(Math.random() * arr.length);

  // get random item
  const item = arr[randomIndex];

  return item;
};
