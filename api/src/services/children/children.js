import { db } from 'src/lib/db'

export const children = () => {
  return db.child.findMany()
}

export const child = ({ id }) => {
  return db.child.findUnique({
    where: { id },
  })
}

export const createChild = ({ input }) => {
  return db.child.create({
    data: input,
  })
}

export const updateChild = ({ id, input }) => {
  return db.child.update({
    data: input,
    where: { id },
  })
}

export const deleteChild = ({ id }) => {
  return db.child.delete({
    where: { id },
  })
}

export const Child = {
  family: (_obj, { root }) => {
    return db.child.findUnique({ where: { id: root?.id } }).family()
  },
}
