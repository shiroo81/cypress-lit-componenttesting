import {cleanupStyles, getContainerEl} from '@cypress/mount-utils';

Cypress.Commands.add('mount', (component:string, options = {}) => {
  return mountComponent(component, options)
})

const mountComponent = (
  fixture: string,
  component = {},
) => {
  return cy
    .window({
      log: false,
    })
    .then( () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      Cypress.log({
        name: 'mount',
        message: [fixture, component],
      }).snapshot('mounted').end()

     const el = getContainerEl()

      const componentNode = document.createElement('div');
      componentNode.innerHTML = fixture;
      el.append(componentNode);
    })
}

