
// TODO 把錯誤碼的定義及使用改成以常數名為key值，讓它可以透過編輯器自動完成

module.exports = {

    'DATA_MUST_BE_ARRAY': '10001 DATA_MUST_BE_ARRAY 傳入的資料必須為 array',
    'DATA_MUST_BE_OBJECT': '10002 DATA_MUST_BE_OBJECT 傳入的資料必須為 object',
    'FIELD_REQUIRED': '10003 FIELD_REQUIRED 缺少資料欄位',
    'BAD_REQUEST': '10004 BAD_REQUEST 錯誤的請求格式',

    // User 相關錯誤

    'BAD_ACCESS_TOKEN': '11001 BAD_ACCESS_TOKEN 無效的Access_Token',
    'USER_NOT_FOUND': '11002 USER_NOT_FOUND 找不到使用者',
    'BAD_VALIDATE_CODE': '11003 BAD_VALIDATE_CODE 驗證碼無效或者已過期',
    'EMAIL_EXIST': '11004 EMAIL_EXIST 信箱已經註冊過且通過驗證',
    'USER_EXIST': '11005 USER_EXIST 使用者已存在',
    'LOGIN_FAILED': '11006 LOGIN_FAILED 登入失敗，錯誤的登入資訊',
    'EMAIL_NOT_BOUND': '11007 EMAIL_NOT_BOUND 信箱尚未綁定',
    'USER_FORBIDDEN': '11008 USER_FORBIDDEN 使用者權限不符合',
    'BAD_EMAIL': '11009 BAD_EMAIL 錯誤的信箱格式',
    'USER_BLOCKED': '11018 USER_BLOCKED 您的帳號違反使用規則，遭到停權，請向系統服務員聯絡。',
    'PHONE_EXIST': '11019 PHONE_EXIST 電話已經註冊過且通過驗證',
    'BAD_PHONE': '11020 BAD_PHONE 電話已經註冊過且通過驗證',
    'PHONE_NOT_BOUND': '11021 PHONE_NOT_BOUND 電話尚未綁定',
    'BAD_PASSWORD': '11022 BAD_PASSWORD 錯誤的使用者密碼',
    'USER_USERNAME_EXIST': '11024 USER_USERNAME_EXIST 此USER的USERNAME已經設定過',
    'USER_USERNAME_DUPLICATE': '11025 USER_USERNAME_DUPLICATE USERNAME已經重複',

    /*
     *
     * 系統核心錯誤 相關錯誤
     *
     * */
    'RESOURCE_NOT_FOUND': '99002 RESOURCE_NOT_FOUND 找不到這筆資料',
    'ERROR_UNDEFINED': '99998 ERROR_UNDEFINED 未定義錯誤',
    'BAD_ERROR': '99999 BAD_ERROR 不正確的錯誤呼叫，請聯絡偷懶的後端人員'

};
