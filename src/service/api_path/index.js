export const chat = '/chat';
const chat_datas = '/chat_datas';

export const CHAT_DATA_ENDPOINT = chat + chat_datas;

const get_chats = '/get_chats';
export const GET_CHATS_ENDPOINT = chat + get_chats;

const get_sessions = '/get_sessions';
export const GET_ALL_SESSION = chat + get_sessions;

const create_session2 = '/create_session2';
export const CREATE_SESSION = chat + create_session2;

const create_call_list = '/create_call_list';
export const CREATE_CALL_LIST = chat + create_call_list;

const filter_session = '/filter_session';
export const FILTER_SESSION = chat + filter_session;

const earnings = '/earnings';
export const EARNINGS = chat + earnings;

const add_stafforpcp_to_session = '/add_stafforpcp_to_session';
export const ADDSTAFF_TO_SESSION = chat + add_stafforpcp_to_session;

const update_close_codes = '/update_close_codes';
export const UPDATE_CLISE_CODE = chat + update_close_codes;

const update_permissions = '/update_permissions';
export const UPDATE_PERMISSION = chat + update_permissions;

const session_details = '/session_details';
export const SESSION_DETAILS = chat + session_details;

const get_chat_media = '/get_chat_media';
export const GET_SESSION_MEDIA = chat + get_chat_media;

const send_notification = '/send_notification';
export const SEND_NOTIFICATION = chat + send_notification;

const ios_voip = '/ios_voip';
export const IOS_VOIP = chat + ios_voip;

const read_by = '/read_by';
export const READ_BY = chat + read_by;

const staff_to_provider = '/staff_to_provider';
export const STAFF_TO_PROVIDER = chat + staff_to_provider;

const update_live_status = '/update_live_status';
export const UPDATE_LIVE_STATUS = chat + update_live_status;

const generate_pdf = '/generate_pdf';
export const GENERATE_PDF = chat + generate_pdf;

const update_fire_token = '/update_fire_token';
export const UPDATE_FIRE_TOKEN = chat + update_fire_token;

const session_timeout_control = '/session_timeout_control';
export const SESSION_TIMEOUT = chat + session_timeout_control;

const missed_call = '/missed_call';
export const MISSED_CALLS = chat + missed_call;

const dismiss_missed_call = '/dismiss_missed_call';
export const DISSMISS_MISSED_CALLS = chat + dismiss_missed_call;

const call_record = '/call_record';
export const CALL_RECORD = chat + call_record;

const archive_chat = '/archive_chat';
export const ARCHIVE_CHAT = chat + archive_chat;

export const USER_MANAGEMENT = '/user_management';
const self_login = '/self_login';

export const LOGIN_ENDPOINT = USER_MANAGEMENT + self_login;

const view_users = '/view_users';
export const CURRENT_USER_ENDPOINT = USER_MANAGEMENT + view_users;

const self_register = '/self_register';
export const REGISTER_ENDPOINT = USER_MANAGEMENT + self_register;

const auto_assign = '/auto_assign';
export const AUTO_ASSIGN_ENDPOINT = USER_MANAGEMENT + auto_assign;

const provider_role_list2 = '/provider_role_list2';
export const PROVIDER_ROLE_LIST = USER_MANAGEMENT + provider_role_list2;

const close_codes = '/close_codes';
export const CLOSE_CODES = USER_MANAGEMENT + close_codes;

const at_generalist = '/at_generalist';
export const AT_GENERALIST = USER_MANAGEMENT + at_generalist;

const search = '/search';
export const SEARCH = USER_MANAGEMENT + search;

const master_insurances = '/master_insurances';
export const INSURENCE = USER_MANAGEMENT + master_insurances;

const add_patients = '/add_patients';
export const ADDPATIENT = USER_MANAGEMENT + add_patients;

const provider_org_list2 = '/provider_org_list2';
export const PROVIDERORGLIST = USER_MANAGEMENT + provider_org_list2;

const permissions = '/permissions';
export const PARTICIPANTS = USER_MANAGEMENT + permissions;

const update_image = '/update_image';
export const UPDATE_IMAGE = USER_MANAGEMENT + update_image;

const update_users = '/update_users';
export const UPDATE_USER = USER_MANAGEMENT + update_users;

const check_email = '/check_email';
export const CHECK_EMAIL = USER_MANAGEMENT + check_email;

const forgot_password = '/forgot_password';
export const FORGOT_PASSWORD = USER_MANAGEMENT + forgot_password;

const create_password = '/create_password';
export const CREATE_PASSWORD = USER_MANAGEMENT + create_password;

const get_user_status = '/get_user_status';
export const GET_USER_STATUS = USER_MANAGEMENT + get_user_status;

const generate_org_email = '/generate_org_email';
export const GENEREATE_ORG_EMAIL = USER_MANAGEMENT + generate_org_email;

const doctor_dashboard = '/doctor_dashboard';
export const EARNING_DASHBOARD = USER_MANAGEMENT + doctor_dashboard;

const logout = '/logout';
export const LOGOUT = USER_MANAGEMENT + logout;

const rate_and_review = '/rate_and_review';
export const RATING_ALIGNMENT = USER_MANAGEMENT + rate_and_review;

const provider_staff_map_view = '/provider_staff_map_view';
export const PROVIDER_STAFF_MAP_VIEW = USER_MANAGEMENT + provider_staff_map_view;

const gen_agora_token = '/gen_agora_token';
export const GEN_AGORA_TOKEN = USER_MANAGEMENT + gen_agora_token;

export const SUPER_ADMIN = '/super_admin';

const speciality_master = '/speciality_master';

export const SPECIALITY_MASTER_ENDPOINT = SUPER_ADMIN + speciality_master;

const at_staff = '/at_staff';
export const AT_STAFF = SUPER_ADMIN + at_staff;

const view_org_spec = '/view_org_spec';
export const ORG_SPEC = SUPER_ADMIN + view_org_spec;

const view_org_permission = '/view_org_permission';
export const ORG_PERMISSION = SUPER_ADMIN + view_org_permission;

const view_org_close_codes = '/view_org_close_codes';
export const ORG_CLOSE_CODE = SUPER_ADMIN + view_org_close_codes;

const view_org = '/view_org';
export const VIEW_ORG = SUPER_ADMIN + view_org;

export {
  self_login,
};
