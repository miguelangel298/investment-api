import UserDTO from '../../domain/DTOs/UserDTO';

/**
 * This method returns all the permissions without duplicating in any
 * @param user <UserDTO>
 */
const getPermissions = (user: UserDTO) => {
  let permissions: string[] = [];
  for (const userPermissionGroups of  user.userPermissionGroups) {
    // concat all permissions from all permissionGroups
    permissions = permissions.concat(userPermissionGroups.permissions.map(
      (permissions) =>
      { return permissions.code; }));
  }
  // remove all duplicate permissions and return it
  return  [...new Set(permissions)];

};
export default getPermissions;
