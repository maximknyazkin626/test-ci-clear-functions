export const checkHealth = (person) => {
  if (person.health > 50) {
    return "healthy";
  } else if (person.health < 50 && person.health > 15) {
    return "wounded";
  } else if (person.health < 15) {
    return "critical";
  }
};
