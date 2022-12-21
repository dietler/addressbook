export const QUERY = gql`
  query FamiliesQuery {
    families {
      id
      lastName
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ families }) => {
  return (
    <>
      {families.map((family) => (
        <div key={family.id}>
          <header>
            <h2>{family.lastName}</h2>
          </header>
        </div>
      ))}
    </>
  )
}
