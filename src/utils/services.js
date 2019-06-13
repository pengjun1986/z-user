// 统一网关
const gateway = {
  domain: process.env.VUE_APP_GATEWAY,
  login: {
    method: 'post',
    url: '/home/login'
  },
  getRoles: {
    url: '/qds-api/manage/role/queryByPage'
  }
}

// 计费云
const oasis = {
  domain: process.env.VUE_APP_OASIS + '/qdp-oasis-web',
  // 获取小区列表
  getCommunities: {
    url: '/common/getRegionTree'
  },
  // 获取费项列表
  getFees: {
    method: 'post',
    url: '/common/getFeeItemTree'
  },
  // 获取费项标准分页
  getPageFeeStandard: {
    method: 'post',
    url: '/api/fee/getFeeStandardsByFeeIdAndRegionIdAndOtherConditions'
  },
  // 获取客户列表
  getCustomers: {
    method: 'post',
    url: '/api/person-room/getPersonPageList'
  },
  // 获取合同分类列表树
  getCategoryTree: {
    url: '/api/contractType/queryContractType'
  },
  // 获取子级合同分类列表
  getChildCategoriesById: {
    url: '/api/contractType/queryContractType'
  },
  // 批量保存子级合同分类
  saveCategories: {
    method: 'post',
    url: '/api/contractType/addAndUpdate'
  },
  // 删除合同分类
  delCategoryById: {
    url: '/api/contractType/deleteContractType'
  },
  // 获取合同分页
  pageContracts: {
    method: 'post',
    url: '/api/contract/query'
  },
  // 查询合同详情
  getContractById: {
    method: 'post',
    url: '/api/contract/queryById'
  },
  // 保存合同信息
  saveContract: {
    method: 'post',
    url: '/api/contract/addAndUpdate'
  },
  // 合同费用录入
  addContractCost: {
    method: 'post',
    url: '/api/contractBill/create'
  },
  // 查询合同费用录入
  getContractCosts: {
    url: '/api/contractBill/queryContractBills'
  },
  // 获取小区列表
  getDistricts: {
    url: '/common/getRegionTree'
  },
  // 获取合同分类列表
  getCategories: {
    url: '/common/getRegionTree'
  },
  // 合同计费信息 王
  getDetail: {
    url: '/common/getRegionTree'
  }
}

// MOCK，webpack-dev-server转发
const mock = {
  domain: '/mock',
  login: {
    method: 'post',
    url: '/home/login'
  }
}

export {
  gateway,
  oasis,
  mock
}
