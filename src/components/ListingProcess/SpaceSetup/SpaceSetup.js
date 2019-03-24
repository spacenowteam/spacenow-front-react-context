import React from 'react'
// import { Grid, Row, Col } from 'react-bootstrap'
import { Container, Row, Col } from 'reactstrap'
// import withStyles from 'isomorphic-style-loader/lib/withStyles';
// import { injectIntl, FormattedMessage } from 'react-intl'
import PropTypes from 'prop-types'
// import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
// import { getFormValues } from 'redux-form'

// import Title from './../Title';
// import Footer from './../Footer';

// import Specification from './Specifications/Specification';
// import BookingType from './BookingType/BookingType';
// import Pricing from './Pricing/Pricing';
// import PhotosList from './PhotosListing/PhotosListing';
// import Fees from './Fees/Fees';
// import Aboult from './Aboult/Aboult';
// import AmenitiesBuilding from './AmenitiesBuilding/AmenitiesBuilding';
// import SpaceRules from './SpaceRules/SpaceRules';
// import AmenitiesSpace from './AmenitiesSpace/AmenitiesSpace';
// import Exceptions from './Exceptions/Exceptions';
// import AccessType from './AccessType/AccessType';
// import TimeTable from './TimeTable/TimeTable';
// import HolidayTable from './HolidayTable/HolidayTable';

// import messages from './../../../locale/messages';

import { startSpaceSetupBySpaceId } from '../../../actions/SpaceSetup'

// import {
//   getSpecificationBySpaceId,
//   saveSpecificationForSpaceId,
// } from './../../../actions/Specification';

// import { getBookingTypeBySpaceId, saveBookingTypeForSpaceId } from './../../../actions/BookingType';

// import { getPricingBySpaceId, savePricingForSpaceId } from './../../../actions/Pricing';

// import { getPhotosListBySpaceId, savePhotosListForSpaceId } from './../../../actions/PhotosList';

// import { getFeesBySpaceId, saveFeesForSpaceId } from './../../../actions/Fees';

// import { getAboultBySpaceId, saveAboultForSpaceId } from './../../../actions/Aboult';

// import {
//   getAmenitiesBuildingBySpaceId,
//   saveAmenitiesBuildingForSpaceId,
// } from './../../../actions/AmenitiesBuilding';

// import { getSpaceRulesBySpaceId, saveSpaceRulesForSpaceId } from './../../../actions/SpaceRules';

// import {
//   getAmenitiesSpaceBySpaceId,
//   saveAmenitiesSpaceForSpaceId,
// } from './../../../actions/AmenitiesSpace';

// import { getAccessTypeBySpaceId, saveAccessTypeForSpaceId } from './../../../actions/AccessType';

// import { getExceptionsBySpaceId, saveExceptionsForSpaceId } from './../../../actions/Exceptions';

// import { getTimeTableBySpaceId, saveTimeTableForSpaceId } from './../../../actions/TimeTable';

// import {
//   getHolidayTableBySpaceId,
//   saveHolidayTableForSpaceId,
// } from './../../../actions/HolidayTable';

import s from './SpaceSetup.css'

class SpaceSetup extends React.Component {
  componentDidMount() {
    const { parentId } = this.props
    this.props.startSpaceSetup(parentId)
    // this.props.fetchSpecification(parentId);
    // this.props.fetchBookingType(parentId);
    // this.props.fetchPricing(parentId);
    // this.props.fetchPhotos(parentId);
    // this.props.fetchFees(parentId);
    // this.props.fetchAboult(parentId);
    // this.props.fetchAmenitiesBuilding(parentId);
    // this.props.fetchSpaceRules(parentId);
    // this.props.fetchAmenitiesSpace(parentId);
    // this.props.fetchAccessType(parentId);
    // this.props.fetchExceptions(parentId);
    // this.props.fetchTimeTable(parentId);
    // this.props.fetchHolidayTable(parentId);
  }

  _onSave = () => {
    // this._saveSpecification();
    // this._saveBookingType();
    // this._savePricing();
    // this._savePhotos();
    // this._saveFees();
    // this._saveAboult();
    // this._saveAmenitiesBuilding();
    // this._saveSpaceRules();
    // this._saveAmenitiesSpace();
    // this._saveAccessType();
    // this._saveExceptions();
    // this._saveTimeTable();
    // this._saveHolidayTable();
    this.props.handleChangePage()
  }

  // _saveSpecification = () => {
  //   const { parentId, specificationValues } = this.props;
  //   this.props.saveSpecification(specificationValues, parentId);
  // };

  // _saveBookingType = () => {
  //   const { parentId, bookingTypeValues } = this.props;
  //   this.props.saveBookingType(bookingTypeValues, parentId);
  // };

  // _savePricing = () => {
  //   const { parentId, pricingValues } = this.props;
  //   this.props.savePricing(pricingValues, parentId);
  // };

  // _savePhotos = () => {
  //   const { parentId, photosValues } = this.props;
  //   this.props.savePhotos(photosValues, parentId);
  // };

  // _saveFees = () => {
  //   const { parentId, feesValues } = this.props;
  //   this.props.saveFees(feesValues, parentId);
  // };

  // _saveAboult = () => {
  //   const { parentId, aboultValues } = this.props;
  //   this.props.saveAboult(aboultValues, parentId);
  // };

  // _saveAmenitiesBuilding = () => {
  //   const { parentId, amenitiesBuildingValues } = this.props;
  //   this.props.saveAmenitiesBuilding(amenitiesBuildingValues, parentId);
  // };

  // _saveSpaceRules = () => {
  //   const { parentId, spaceRulesValues } = this.props;
  //   this.props.saveSpaceRules(spaceRulesValues, parentId);
  // };

  // _saveAmenitiesSpace = () => {
  //   const { parentId, amenitiesSpaceValues } = this.props;
  //   this.props.saveAmenitiesSpace(amenitiesSpaceValues, parentId);
  // };

  // _saveAccessType = () => {
  //   const { parentId, accessTypeValues } = this.props;
  //   this.props.saveAccessType(accessTypeValues, parentId);
  // };

  // _saveExceptions = () => {
  //   const { parentId, exceptionsValues } = this.props;
  //   this.props.saveExceptions(exceptionsValues, parentId);
  // };

  // _saveTimeTable = () => {
  //   const { parentId, timeTableValues } = this.props;
  //   this.props.saveTimeTable(timeTableValues, parentId);
  // };

  // _saveHolidayTable = () => {
  //   const { parentId, holidayTableValues } = this.props;
  //   this.props.saveHolidayTable(holidayTableValues, parentId);
  // };

  render() {
    return (
      <Container>
        {/* <Row>
          <Col md={12} className="title-section">
            <h3>
              <FormattedMessage {...messages.specificationTitle} />
            </h3>
            <p>
              <FormattedMessage {...messages.specificationDescription} />
            </p>
          </Col>
        </Row> */}
        <Row className="justify-content-md-center">
          <Col md={6}>
            {/* <Row>
              <Specification />
            </Row> */}
            {/* <Row>
              <Col md={12} className="title-section">
                <h3>
                  <FormattedMessage {...messages.bookingTypeTitle} />
                </h3>
                <BookingType />
              </Col>
            </Row> */}
            {/* <Row>
              <Col md={12} className="title-section">
                <h3>
                  <FormattedMessage {...messages.pricingTitle} />
                </h3>
                <Pricing />
              </Col>
            </Row> */}
          </Col>
          {/* <Col md={6}>
            <h3>
              <FormattedMessage {...messages.photosTitle} />
            </h3>
            <p>
              <FormattedMessage {...messages.photosDescription} />
            </p>
            <PhotosList />
          </Col> */}
        </Row>
        <Row>
          {/* <Col md={6}>
            <h3>
              <FormattedMessage {...messages.feesTitle} />
            </h3>
            <p>
              <FormattedMessage {...messages.feesDescription} />
            </p>
            <Fees />
          </Col> */}
          {/* <Col md={6}>
            <h3>
              <FormattedMessage {...messages.aboultTitle} />
            </h3>
            <p>
              <FormattedMessage {...messages.aboultDescription} />
            </p>
            <Aboult />
          </Col> */}
        </Row>
        <Row>
          {/* <Col md={6}>
            <h3>
              <FormattedMessage {...messages.amenitiesBuildingTitle} />
            </h3>
            <p>
              <FormattedMessage {...messages.amenitiesBuildingDescription} />
            </p>
            <AmenitiesBuilding />
          </Col> */}
          {/* <Col md={6}>
            <h3>
              <FormattedMessage {...messages.spaceRulesTitle} />
            </h3>
            <p>
              <FormattedMessage {...messages.spaceRulesDescription} />
            </p>
            <SpaceRules />
          </Col> */}
        </Row>
        <Row>
          {/* <Col md={6}>
            <h3>
              <FormattedMessage {...messages.spaceAmenitiesTitle} />
            </h3>
            <p>
              <FormattedMessage {...messages.spaceAmenitiesDescription} />
            </p>
            <AmenitiesSpace />
          </Col> */}
          {/* <Col md={6}>
            <h3>
              <FormattedMessage {...messages.exceptionsTitle} />
            </h3>
            <p>
              <FormattedMessage {...messages.exceptionsDescription} />
            </p>
            <Exceptions
              change={value => console.log(value)}
              formName="ExceptionsForm"
              disabledDates={[]}
              blockedDates={[]}
            />
          </Col> */}
        </Row>
        {/* <Row>
          <Title
            title={<FormattedMessage {...messages.accessTypeTitle} />}
            subtitle={<FormattedMessage {...messages.accessTypeDescription} />}
          />
        </Row> */}
        {/* <Row className="justify-content-md-center">
          <Col md={3}>
            <AccessType />
          </Col>
        </Row> */}
        {/* <Row>
          <Title
            title={<FormattedMessage {...messages.timeTableTitle} />}
            subtitle={<FormattedMessage {...messages.timeTableDescription} />}
          />
        </Row> */}
        {/* <Row className="justify-content-md-center">
          <Col md={12}>
            <TimeTable />
          </Col>
        </Row> */}
        {/* <Row>
          <Title
            title={<FormattedMessage {...messages.holidayTableTitle} />}
            subtitle={<FormattedMessage {...messages.holidayTableDescription} />}
          />
        </Row> */}
        {/* <Row className="justify-content-md-center">
          <Col md={12}>
            <HolidayTable />
          </Col>
        </Row> */}
        {/* <Row>
          <Footer
            next={{
              title: 'Save',
              page: this.props.nextTab,
              onClick: this._onSave,
            }}
          />
        </Row> */}
      </Container>
    )
  }
}

SpaceSetup.propTypes = {
  // Props from Listing process main page.
  nextTab: PropTypes.string.isRequired,
  handleChangePage: PropTypes.func.isRequired,
  parentId: PropTypes.number,

  // Sub-Components form values.
  // specificationValues: PropTypes.objectOf(),
  // bookingTypeValues: PropTypes.objectOf(),
  // pricingValues: PropTypes.objectOf(),
  // photosValues: PropTypes.objectOf(),
  // feesValues: PropTypes.objectOf(),
  // aboultValues: PropTypes.objectOf(),
  // amenitiesBuildingValues: PropTypes.objectOf(),
  // spaceRulesValues: PropTypes.objectOf(),
  // amenitiesSpaceValues: PropTypes.objectOf(),
  // accessTypeValues: PropTypes.objectOf(),
  // exceptionsValues: PropTypes.objectOf(),
  // timeTableValues: PropTypes.objectOf(),
  // holidayTableValues: PropTypes.objectOf(),

  // Actions to sub-components inside the SpaceSetup page.
  startSpaceSetup: PropTypes.func
  // fetchSpecification: PropTypes.func,
  // saveSpecification: PropTypes.func,
  // fetchBookingType: PropTypes.func,
  // saveBookingType: PropTypes.func,
  // fetchPricing: PropTypes.func,
  // savePricing: PropTypes.func,
  // fetchPhotos: PropTypes.func,
  // savePhotos: PropTypes.func,
  // fetchFees: PropTypes.func,
  // saveFees: PropTypes.func,
  // fetchAboult: PropTypes.func,
  // saveAboult: PropTypes.func,
  // fetchAmenitiesBuilding: PropTypes.func,
  // saveAmenitiesBuilding: PropTypes.func,
  // fetchSpaceRules: PropTypes.func,
  // saveSpaceRules: PropTypes.func,
  // fetchAmenitiesSpace: PropTypes.func,
  // saveAmenitiesSpace: PropTypes.func,
  // fetchAccessType: PropTypes.func,
  // saveAccessType: PropTypes.func,
  // fetchExceptions: PropTypes.func,
  // saveExceptions: PropTypes.func,
  // fetchTimeTable: PropTypes.func,
  // saveTimeTable: PropTypes.func,
  // fetchHolidayTable: PropTypes.func,
  // saveHolidayTable: PropTypes.func,
}

SpaceSetup.defaultProps = {
  parentId: 4
}

// const mapStateToProps = state => ({
//   // specificationValues: getFormValues('ListingProcess_SpaceSetup_Specification')(state),
//   // bookingTypeValues: getFormValues('ListingProcess_SpaceSetup_BookingType')(state),
//   // pricingValues: getFormValues('ListingProcess_SpaceSetup_Pricing')(state),
//   // photosValues: getFormValues('ListingProcess_SpaceSetup_PhotosListing')(state),
//   // feesValues: getFormValues('ListingProcess_SpaceSetup_Fees')(state),
//   // aboultValues: getFormValues('ListingProcess_SpaceSetup_Aboult')(state),
//   // amenitiesBuildingValues: getFormValues('ListingProcess_SpaceSetup_AmenitiesBuilding')(state),
//   // spaceRulesValues: getFormValues('ListingProcess_SpaceSetup_SpaceRules')(state),
//   // amenitiesSpaceValues: getFormValues('ListingProcess_SpaceSetup_AmenitiesSpace')(state),
//   // accessTypeValues: getFormValues('ListingProcess_SpaceSetup_AccessType')(state),
//   // exceptionsValues: getFormValues('ListingProcess_SpaceSetup_Exceptions')(state),
//   // timeTableValues: getFormValues('ListingProcess_SpaceSetup_TimeTable')(state),
//   // holidayTableValues: getFormValues('ListingProcess_SpaceSetup_HolidayTable')(state),
// })

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(
//     {
//       startSpaceSetup: startSpaceSetupBySpaceId
//       // fetchSpecification: getSpecificationBySpaceId,
//       // saveSpecification: saveSpecificationForSpaceId,
//       // fetchBookingType: getBookingTypeBySpaceId,
//       // saveBookingType: saveBookingTypeForSpaceId,
//       // fetchPricing: getPricingBySpaceId,
//       // savePricing: savePricingForSpaceId,
//       // fetchPhotos: getPhotosListBySpaceId,
//       // savePhotos: savePhotosListForSpaceId,
//       // fetchFees: getFeesBySpaceId,
//       // saveFees: saveFeesForSpaceId,
//       // fetchAboult: getAboultBySpaceId,
//       // saveAboult: saveAboultForSpaceId,
//       // fetchAmenitiesBuilding: getAmenitiesBuildingBySpaceId,
//       // saveAmenitiesBuilding: saveAmenitiesBuildingForSpaceId,
//       // fetchSpaceRules: getSpaceRulesBySpaceId,
//       // saveSpaceRules: saveSpaceRulesForSpaceId,
//       // fetchAmenitiesSpace: getAmenitiesSpaceBySpaceId,
//       // saveAmenitiesSpace: saveAmenitiesSpaceForSpaceId,
//       // fetchAccessType: getAccessTypeBySpaceId,
//       // saveAccessType: saveAccessTypeForSpaceId,
//       // fetchExceptions: getExceptionsBySpaceId,
//       // saveExceptions: saveExceptionsForSpaceId,
//       // fetchTimeTable: getTimeTableBySpaceId,
//       // saveTimeTable: saveTimeTableForSpaceId,
//       // fetchHolidayTable: getHolidayTableBySpaceId,
//       // saveHolidayTable: saveHolidayTableForSpaceId,
//     },
//     dispatch
//   )

// export default injectIntl(
//   withStyles(s)(
//     connect(
//       mapStateToProps,
//       mapDispatchToProps,
//     )(SpaceSetup),
//   ),
// );

export default SpaceSetup
