import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import FamiliesCell from 'src/components/FamiliesCell/FamiliesCell'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <h1>Families</h1>
      <FamiliesCell />
    </>
  )
}

export default HomePage
