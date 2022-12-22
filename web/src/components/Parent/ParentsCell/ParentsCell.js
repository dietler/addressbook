import { Link, routes } from '@redwoodjs/router'

import Parents from 'src/components/Parent/Parents'

export const QUERY = gql`
  query FindParents {
    parents {
      id
      familyId
      firstName
      sex
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No parents yet. '}
      <Link to={routes.newParent()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ parents }) => {
  return <Parents parents={parents} />
}
