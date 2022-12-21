import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Family/FamiliesCell'
import { truncate } from 'src/lib/formatters'

const DELETE_FAMILY_MUTATION = gql`
  mutation DeleteFamilyMutation($id: Int!) {
    deleteFamily(id: $id) {
      id
    }
  }
`

const FamiliesList = ({ families }) => {
  const [deleteFamily] = useMutation(DELETE_FAMILY_MUTATION, {
    onCompleted: () => {
      toast.success('Family deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete family ' + id + '?')) {
      deleteFamily({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Last name</th>
            <th>Address</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {families.map((family) => (
            <tr key={family.id}>
              <td>{truncate(family.id)}</td>
              <td>{truncate(family.lastName)}</td>
              <td>{truncate(family.address)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.family({ id: family.id })}
                    title={'Show family ' + family.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editFamily({ id: family.id })}
                    title={'Edit family ' + family.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete family ' + family.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(family.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default FamiliesList
