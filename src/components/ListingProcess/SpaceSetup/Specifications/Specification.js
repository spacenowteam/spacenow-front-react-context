import React, { useEffect } from 'react'
// import { connect } from 'react-redux';
// import { reduxForm, FieldArray } from 'redux-form';
// import { injectIntl } from 'react-intl';
import { Container, Row, Col } from 'reactstrap'
import { SPECIFICATION_GET_BY_SPACE_ID } from '../../../../context/actions/specification'
import { useSpecification } from '../../../../context/providers/SpecificationProvider'

// import withStyles from 'isomorphic-style-loader/lib/withStyles';

// import Input from './../../components/Input'

import s from './Specification.css'

const Specification = props => {

  const [specification, dispatch] = useSpecification()

  useEffect( async () => {
    const variables = {
      listSettingsParentId: props.parentId,
    };

    const bodyRequest = {
      query: `
        query ($listSettingsParentId: Int!) {
          GetAllSubcategorySpecifications(listSettingsParentId: $listSettingsParentId) {
            listSettingsChild {
              id
              itemName
            }
          }
        }`,
      variables
    };

    const resp = await fetch("http://localhost:3000/graphql", {
      method: "POST",
      body: JSON.stringify(bodyRequest),
      headers: {
        "Content-Type": "application/json",
        Autorization: "Test"
      }
    });
    
    const { data } = await resp.json();

    console.log(data)
    
    dispatch({
      type: SPECIFICATION_GET_BY_SPACE_ID,
      payload: data.GetAllSubcategorySpecifications
    })

  }, [])

  return (
    <Container>
      <Row>
        <Col md={6}>

          {}

          {/* <FieldArray
            name="data"
            component={({ fields }) => (
              <div className="form-group">
                {fields.map((item, index) => (
                  <Col md={6}>
                    <Input
                      label={`Specification ${index + 1}`}
                      name={`${item}.listSettingsChild.itemName`}
                      className={s['form-pricing']}
                    />
                  </Col>
                ))}
              </div>
            )}
          /> */}
        </Col>
      </Row>
    </Container>
  )
}

// Specification = reduxForm({
//   form: 'ListingProcess_SpaceSetup_Specification',
//   destroyOnUnmount: false,
//   forceUnregisterOnUnmount: true,
//   enableReinitialize: true,
// })(Specification);

// Specification = connect(state => ({
//   initialValues: state.specification,
// }))(Specification);

// export default injectIntl(withStyles(s)(Specification));

export default Specification
