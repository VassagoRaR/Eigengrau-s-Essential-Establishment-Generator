setup.createGuardhouse = (town, faction, opts) => {
  console.groupCollapsed('Guardhouse loading...')
  const guardhouse = createBuilding(town, 'guardhouse')
  setup.createStructure(town, guardhouse)
  console.log(guardhouse)
  console.groupEnd()
  return guardhouse
}
