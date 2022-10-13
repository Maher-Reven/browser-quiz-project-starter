export const createProgressionBar = (width) => {
  const element = document.createElement('div');
  element.id = 'progression_bar';
  const childElement = document.createElement('div');
  element.appendChild(childElement);

  childElement.style.width = width + '%';
  return element;
};
