export const QUERY = gql`
  query ParentsQuery($id: Int!) {
    parents(familyId: $id) {
      id
      firstName
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ parents }) => {
  return (
    <ul>
      {parents.map((parent) => {
        return <li key={parent.id}>{parent.firstName}</li>
      })}
    </ul>
  )
}
