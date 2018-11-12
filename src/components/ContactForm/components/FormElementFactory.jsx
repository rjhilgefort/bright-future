import React, { Fragment } from 'react'
import * as R from 'ramda'
import { compose, shouldUpdate } from 'recompose'
import createFormikFieldsComparator from 'create-formik-fields-comparator'

const FormElementFactory = R.curry((Component, type, name) =>
  compose(shouldUpdate(createFormikFieldsComparator([name])))(({
    values, errors, touched, onChange, onBlur
  }) => (
    <Fragment>
      <Component
        type={type}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        value={values[name]}
      />
      {errors[name] && touched[name] && <div>{errors[name]}</div>}
    </Fragment>
  )),
)

export default FormElementFactory
