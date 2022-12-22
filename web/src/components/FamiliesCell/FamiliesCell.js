export const QUERY = gql`
  query FamiliesQuery {
    families {
      id
      lastName
      address
      Parents {
        id
        firstName
      }
      Children {
        id
        firstName
      }
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
    <div className="lg:grids-cols-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      {families.map((family) => (
        <div
          key={family.id}
          className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
        >
          <div className="min-w-0 flex-1">
            <a href="#" className="focus:outline-none">
              <span className="absolute inset-0" aria-hidden="true" />
              <p className="text-sm font-medium text-gray-900">
                {family.Parents.map((parent, index, array) => (
                  <>
                    {parent.firstName} {index + 1 < array.length && <>&amp; </>}
                  </>
                ))}
                {family.lastName}
              </p>
              <p className="truncate text-sm text-gray-500">{family.address}</p>
              {family.Children.map((child, index, array) => (
                <>{child.firstName}</>
              ))}
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}
