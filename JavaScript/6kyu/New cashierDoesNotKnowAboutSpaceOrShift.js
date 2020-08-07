function getOrder(input) {
  const menuItems = {
    burger: { 0: "Burger", 1: [] },
    fries: { 0: "Fries", 1: [] },
    chicken: { 0: "Chicken", 1: [] },
    pizza: { 0: "Pizza", 1: [] },
    sandwich: { 0: "Sandwich", 1: [] },
    onionrings: { 0: "Onionrings", 1: [] },
    milkshake: { 0: "Milkshake", 1: [] },
    coke: { 0: "Coke", 1: [] }
  };

  let currentPosition = 0,
    result = [];

  for (let counter = 0; counter <= input.length; counter++) {
    const menuItem = menuItems[input.slice(currentPosition, counter)];

    if (menuItem) {
      menuItem[1].push(menuItem[0]);
      currentPosition = counter;
    }
  }

  return result
    .concat(
      menuItems["burger"][1],
      menuItems["fries"][1],
      menuItems["chicken"][1],
      menuItems["pizza"][1],
      menuItems["sandwich"][1],
      menuItems["onionrings"][1],
      menuItems["milkshake"][1],
      menuItems["coke"][1]
    )
    .join(" ");
}
