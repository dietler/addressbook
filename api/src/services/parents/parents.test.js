import {
  parents,
  parent,
  createParent,
  updateParent,
  deleteParent,
} from './parents'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('parents', () => {
  scenario('returns all parents', async (scenario) => {
    const result = await parents()

    expect(result.length).toEqual(Object.keys(scenario.parent).length)
  })

  scenario('returns a single parent', async (scenario) => {
    const result = await parent({ id: scenario.parent.one.id })

    expect(result).toEqual(scenario.parent.one)
  })

  scenario('creates a parent', async (scenario) => {
    const result = await createParent({
      input: { familyId: scenario.parent.two.familyId, firstName: 'String' },
    })

    expect(result.familyId).toEqual(scenario.parent.two.familyId)
    expect(result.firstName).toEqual('String')
  })

  scenario('updates a parent', async (scenario) => {
    const original = await parent({ id: scenario.parent.one.id })
    const result = await updateParent({
      id: original.id,
      input: { firstName: 'String2' },
    })

    expect(result.firstName).toEqual('String2')
  })

  scenario('deletes a parent', async (scenario) => {
    const original = await deleteParent({
      id: scenario.parent.one.id,
    })
    const result = await parent({ id: original.id })

    expect(result).toEqual(null)
  })
})
