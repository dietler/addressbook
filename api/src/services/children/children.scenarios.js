export const standard = defineScenario({
  child: {
    one: {
      data: { firstName: 'String', family: { create: { lastName: 'String' } } },
    },
    two: {
      data: { firstName: 'String', family: { create: { lastName: 'String' } } },
    },
  },
})
