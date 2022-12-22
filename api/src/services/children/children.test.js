import {
  children,
  child,
  createChild,
  updateChild,
  deleteChild,
} from './children'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('children', () => {
  scenario('returns all children', async (scenario) => {
    const result = await children()

    expect(result.length).toEqual(Object.keys(scenario.child).length)
  })

  scenario('returns a single child', async (scenario) => {
    const result = await child({ id: scenario.child.one.id })

    expect(result).toEqual(scenario.child.one)
  })

  scenario('creates a child', async (scenario) => {
    const result = await createChild({
      input: { familyId: scenario.child.two.familyId, firstName: 'String' },
    })

    expect(result.familyId).toEqual(scenario.child.two.familyId)
    expect(result.firstName).toEqual('String')
  })

  scenario('updates a child', async (scenario) => {
    const original = await child({ id: scenario.child.one.id })
    const result = await updateChild({
      id: original.id,
      input: { firstName: 'String2' },
    })

    expect(result.firstName).toEqual('String2')
  })

  scenario('deletes a child', async (scenario) => {
    const original = await deleteChild({ id: scenario.child.one.id })
    const result = await child({ id: original.id })

    expect(result).toEqual(null)
  })
})
