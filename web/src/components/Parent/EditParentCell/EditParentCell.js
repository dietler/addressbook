import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ParentForm from 'src/components/Parent/ParentForm'

export const QUERY = gql`
  query EditParentById($id: Int!) {
    parent: parent(id: $id) {
      id
      familyId
      firstName
      sex
    }
  }
`
const UPDATE_PARENT_MUTATION = gql`
  mutation UpdateParentMutation($id: Int!, $input: UpdateParentInput!) {
    updateParent(id: $id, input: $input) {
      id
      familyId
      firstName
      sex
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ parent }) => {
  const [updateParent, { loading, error }] = useMutation(
    UPDATE_PARENT_MUTATION,
    {
      onCompleted: () => {
        toast.success('Parent updated')
        navigate(routes.parents())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateParent({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Parent {parent?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <ParentForm
          parent={parent}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
