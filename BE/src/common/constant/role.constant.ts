export const roleConstants = {
    USER_LIST: "USER_LIST",
    USER_VIEW: "USER_VIEW",
    USER_CREATE: "USER_CREATE",
    USER_EDIT: "USER_EDIT",
    USER_DELETE: "USER_DELETE",

    ROLE_LIST: "ROLE_LIST",
    ROLE_VIEW: "ROLE_VIEW",
    ROLE_CREATE: "ROLE_CREATE",
    ROLE_EDIT: "ROLE_EDIT",
    ROLE_DELETE: "ROLE_DELETE",

}

export const groupRoleView = {
    'User':
        [roleConstants.USER_LIST,
        roleConstants.USER_VIEW,
        roleConstants.USER_CREATE,
        roleConstants.USER_EDIT,
        roleConstants.USER_DELETE],

    'Role':
        [roleConstants.ROLE_LIST,
        roleConstants.ROLE_VIEW,
        roleConstants.ROLE_CREATE,
        roleConstants.ROLE_EDIT,
        roleConstants.ROLE_DELETE],
}