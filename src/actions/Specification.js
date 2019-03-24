import { gql } from 'react-apollo'

import {
  SPECIFICATION_GET_BY_SPACE_ID,
  SPECIFICATION_SAVING,
  SPECIFICATION_SAVED,
  SPECIFICATION_GET_FAILURE
} from '../constants'

const query = gql`
  query($listSettingsParentId: Int!) {
    GetAllSubcategorySpecifications(listSettingsParentId: $listSettingsParentId) {
      listSettingsChild {
        id
        itemName
      }
    }
  }
`

export const getSpecificationBySpaceId = parentId => async (dispatch, getState, { client }) => {
  try {
    const { data } = await client.query({
      query,
      variables: { listSettingsParentId: parentId },
      fetchPolicy: 'network-only'
    })
    dispatch({
      type: SPECIFICATION_GET_BY_SPACE_ID,
      payload: data.GetAllSubcategorySpecifications
    })
  } catch (error) {
    dispatch({ type: SPECIFICATION_GET_FAILURE, payload: error })
  }
}

export const saveSpecificationForSpaceId = (specificationData, parentId) => dispatch => {
  console.log(`Saving specifications for Space ${parentId}`)
  dispatch({ type: SPECIFICATION_SAVING, payload: specificationData })
  console.log(`Saved: ${JSON.stringify(specificationData)}`)
  dispatch({ type: SPECIFICATION_SAVED, payload: specificationData })
}
