import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ParentForm from 'src/components/Parent/ParentForm'

const CREATE_PARENT_MUTATION = gql`
  mutation CreateParentMutation($input: CreateParentInput!) {
    createParent(input: $input) {
      id
    }
  }
`

const NewParent = () => {
  const [createParent, { loading, error }] = useMutation(
    CREATE_PARENT_MUTATION,
    {
      onCompleted: () => {
        toast.success('Parent created')
        navigate(routes.parents())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    createParent({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Parent</h2>
      </header>
      <div className="rw-segment-main">
        <ParentForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewParent
