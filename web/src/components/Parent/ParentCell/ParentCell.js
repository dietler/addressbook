import Parent from 'src/components/Parent/Parent'

export const QUERY = gql`
  query FindParentById($id: Int!) {
    parent: parent(id: $id) {
      id
      familyId
      firstName
      sex
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Parent not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ parent }) => {
  return <Parent parent={parent} />
}
