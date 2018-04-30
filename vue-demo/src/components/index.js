import Swiper from './swiper';
export const components = {
  Swiper
}
const install = function (Vue) {
  if (!Vue || install.installed) {
    return
  }
  const componentsNames = Object.keys(components)
  componentsNames.forEach(name => {
    const component = components[name]
    component.name && Vue.component(component.name, component)
  })
}

export {
  install,
  Swiper
}


export default {
  install
}
