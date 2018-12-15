/**
 * Authorization Roles
 */
const authRoles = {
    developer: ['developer'],
    admin    : ['admin', 'developer'],
    staff    : ['staff','admin', 'developer'],
    user     : ['user', 'staff', 'admin','developer'],
    onlyGuest: ['guest']
};

export default authRoles;
