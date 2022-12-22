export const standard = defineScenario({
  parent: {
    one: {
      data: { firstName: 'String', family: { create: { lastName: 'String' } } },
    },
    two: {
      data: { firstName: 'String', family: { create: { lastName: 'String' } } },
    },
  },
})
