import { db } from 'src/lib/db'

export const parents = () => {
  return db.parent.findMany()
}

export const parent = ({ id }) => {
  return db.parent.findUnique({
    where: { id },
  })
}

export const createParent = ({ input }) => {
  return db.parent.create({
    data: input,
  })
}

export const updateParent = ({ id, input }) => {
  return db.parent.update({
    data: input,
    where: { id },
  })
}

export const deleteParent = ({ id }) => {
  return db.parent.delete({
    where: { id },
  })
}

export const Parent = {
  family: (_obj, { root }) => {
    return db.parent.findUnique({ where: { id: root?.id } }).family()
  },
}
