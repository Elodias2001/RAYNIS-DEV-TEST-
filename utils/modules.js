export function filterModules(modules, userPermissions) {
  return modules.filter(module => {
    // Vérifie si l'utilisateur a la permission d'accéder au module principal
    const hasModulePermission = userPermissions.some(permission => permission.module === module.title)

    if (!hasModulePermission) return false

    // Filtre les sous-modules
    if (module.children && module.children.length > 0) {
      module.children = module.children.filter(child => {
        return userPermissions.some(permission => 
          permission.module === module.title && permission.submodules.includes(child.title),
        )
      })
    }

    return true
  })
}

// export function filterModules(modules, userCategId) {
//   return modules.filter(module => {
//     // Je Vérifie si l'utilisateur est autorisé à voir ce module
//     return !module.allowedIds || module.allowedIds.includes(userCategId)
//   }).map(module => {
//     // Je Filtre les enfants(sous-modules) du module
//     if (module.children && module.children.length > 0) {
//       module.children = module.children.filter(child => {
//         return !child.allowedIds || child.allowedIds.includes(userCategId)
//       })
//     }
    
//     return module
//   })
// }
  