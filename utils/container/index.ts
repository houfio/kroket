export function useContainer(id: string) {
  let container = document.getElementById(id);

  if (!container) {
    container = document.createElement('div');
    container.id = id;

    document.body.appendChild(container);
  }

  return container;
}
