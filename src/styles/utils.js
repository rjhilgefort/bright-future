import * as _ from 'ramda'

export const propEqTern = _.curry(
  (prop, val, yes, no, props) => (props[prop] === val ? yes : no),
)
export const propNumTern = propEqTern(_.__, 1)

export const activeTern = propNumTern('active')
