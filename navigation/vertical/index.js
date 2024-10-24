/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import dashboardAdmin from './admin/dashboard-admin'
import parametres from './admin/parametres'

let allModules = [
  ...dashboardAdmin,
  ...parametres, 

//   ...personnels, 
//   ...finances, 
//   ...users,
]

export default allModules
