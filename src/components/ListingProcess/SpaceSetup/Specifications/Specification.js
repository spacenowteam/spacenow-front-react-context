import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, FieldArray } from 'redux-form';
import { injectIntl } from 'react-intl';
import { Grid, Row, Col } from 'react-bootstrap';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import Input from './../../components/Input';

import s from './Specification.css';

let Specification = () => (
  <Grid>
    <Row>
      <Col md={6}>
        <FieldArray
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
        />
      </Col>
    </Row>
  </Grid>
);

Specification = reduxForm({
  form: 'ListingProcess_SpaceSetup_Specification',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  enableReinitialize: true,
})(Specification);

Specification = connect(state => ({
  initialValues: state.specification,
}))(Specification);

export default injectIntl(withStyles(s)(Specification));
