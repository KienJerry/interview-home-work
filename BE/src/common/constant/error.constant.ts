export const ErrorConstant = {
  NOT_FOUND: 'NOT_FOUND',
  DATE_ALREADY_EXIST: 'DATE_ALREADY_EXIST',
  INVALID: 'INVALID',
  INVALID_TOKEN: 'INVALID_TOKEN',
  ITEM_NOT_FOUND: 'ITEM_NOT_FOUND',
  USER_NOT_FOUND: 'USER_NOT_FOUND',
  GROUP_NOT_FOUND: 'GROUP_NOT_FOUND',
  USER_ALREADY_EXIST: 'USER_ALREADY_EXIST',
  GROUP_ALREADY_EXIST: 'GROUP_ALREADY_EXIST',
  BRAND_ALREADY_EXIST: 'BRAND_ALREADY_EXIST',
  DOOR_ALREADY_EXIST: 'DOOR_ALREADY_EXIST',
  NO_ITEM: 'NO_ITEM_IN_WAREHOUSE',
};

export const errorImportColumn = {
  currencyAdCode: 'CURRENCY_AD_CODE',
  empty: 'EMPTY',
  number: 'NUMBER',
};

/**
 *  ERROR LIST RETURN POS GATEWAY
 *  ========
 *  MENU_DO_NOT_SETUP_TAX: Món A(Item_code& product_receipt_name), B(Item_code& product_receipt_name) chưa có trong m_menu_tax. Nhà hàng Liên Hệ Tech Team để được hỗ trợ
 *  ORDER_ITEM_NOT_ENOUGH: Món A(Item_code& product_receipt_name), B(Item_code& product_receipt_name) đang bị Sold Out ở POS. Nhà hàng vui lòng kiểm tra máy POS.
 *  POS_NOT_OPEN: Máy POS của nhà hàng chưa mở. Nhà hàng vui lòng kiểm tra máy POS và mở ngày mới.
 *  PAYMENT_METHODS_NOT_AVAILABLE: Hình thức thanh toán A,B chưa tồn tại, Nhà hàng liên hệ Tech Team để được hỗ trợ
 *  PROMOTION_NOT_AVAILABLE: Promotion A, B chưa tồn tại. Nhà hàng liên hệ Tech Team để được hỗ trợ.
 *  ==============
 */

export const ErrorNecConstant = {
  ORDER_IS_CHECKING_BILL: 'orderIsCheckingbill',
  TABLE_HAVE_NO_ORDER: 'tableHaveNoOrder',
  TABLE_ITEM_NOT_ENOUGH: 'orderItemNotEnough',
  POS_NOT_OPEN: 'posNotOpen',
  SETTLE_PRIMARY_POS: 'settlePrimaryPos',
  SETTLE_CLOSE_ALL_TABLE: 'settleCloseTable',
  POS_CANNOT_SETTLE: 'posCannotSettle',
  POS_NOT_FOUND: 'posNotFound',
  MISSING_PARAMS: 'missingParams',
  INVALID_PARAMS: 'invalidParams',
  PAYMENT_TYPE_NOT_FOUND: 'paymentTypeNotFound',
  ORDER_NOT_FOUND: 'orderNotFound',
  TABLE_NOT_READY: 'tableNotReady',
  TABLE_NOT_OPEN: 'tableNotOpen',
  NO_ORDER_TO_UPDATE: 'noOrderToUpdate',
  ORDER_DELETED: 'orderDeleted',
  ORDER_PAID: 'orderPaid',
  ORDER_QUANTITY_IS_NEGATIVE: 'orderQuantityIsNegative',
  TABLE_NOT_PAID: 'tableNotPaid',
  ORDER_ITEM_NOT_ENOUGH: 'orderItemNotEnough',
  MASTER_DATA_TYPE_NOT_FOUND: 'masterDataTypeNotFound',
  POS_ACTION_NOT_FOUND: 'posActionNotFound',
  MISSING_TABLE: 'missingTable',
  POS_ALREADY_OPEN: 'posAlreadyOpen',
  TOKEN_HAS_EXPIRED: 'tokenHasExpired',
  STAFF_PASSWORD_INPUT_ERROR: 'passwordInputError',
  AUTHORIZATION_FAILED: 'authorizarionFailed',
  CRM_SERVER_ERROR: 'crmServerError',
  TABLECHECK_SERVER_ERROR: 'tablecheckServerError',
  NOT_JOINED_TABLE: 'notJoinedTable',
  JOINED_TABLE_USING: 'joinedTableUsing',
  ORDER_ITEM_HAS_BEEN_DELETED: 'orderItemHasBeenDeleted',
  NOTALLOW_BOOKING_FROM_OTHER_SYSTEM: 'notallowBookingFromOtherSystem',
  NOT_TABLE_AVAILABLE: 'notTableAvailable',
  TABLE_NOT_FOUND: 'tableNotFound',
  MENU_DO_NOT_SETUP_TAX: 'menuDoNotSetupTax',
  REQUEST_TIMEOUT: 'requestTimeout',
  PAYMENT_METHODS_NOT_AVAILABLE: 'paymentMethodsNotAvailable',
  SERVICE_CHARGE_NOT_AVAILABLE: 'serviceChargeNotAvailable',
  PROMOTION_NOT_AVAILABLE: 'promotionNotAvailable',
  HAVING_ITEM_BELONGS: 'havingItemBelongs',
};
