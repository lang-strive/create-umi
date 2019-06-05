import modelExtend from 'dva-model-extend'

export const model = {
  reducers: {
    updateState (state, { payload }) {
      return {
        ...state,
        ...payload,
      }
    },
  },
}


export const pageModel = modelExtend(model, {

})
