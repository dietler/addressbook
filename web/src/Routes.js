// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={ScaffoldLayout} title="Parents" titleTo="parents" buttonLabel="New Parent" buttonTo="newParent">
        <Route path="/parents/new" page={ParentNewParentPage} name="newParent" />
        <Route path="/parents/{id:Int}/edit" page={ParentEditParentPage} name="editParent" />
        <Route path="/parents/{id:Int}" page={ParentParentPage} name="parent" />
        <Route path="/parents" page={ParentParentsPage} name="parents" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Families" titleTo="families" buttonLabel="New Family" buttonTo="newFamily">
        <Route path="/families/new" page={FamilyNewFamilyPage} name="newFamily" />
        <Route path="/families/{id:Int}/edit" page={FamilyEditFamilyPage} name="editFamily" />
        <Route path="/families/{id:Int}" page={FamilyFamilyPage} name="family" />
        <Route path="/families" page={FamilyFamiliesPage} name="families" />
      </Set>
      <Route path="/" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
