import {AnalyticsDashboardAppConfig} from './dashboards/analytics/AnalyticsDashboardAppConfig';
import {MailAppConfig} from './mail/MailAppConfig';
import {TodoAppConfig} from './todo/TodoAppConfig';
import {ContactsAppConfig} from './contacts/ContactsAppConfig';
import {FileManagerAppConfig} from './file-manager/FileManagerAppConfig';
import {CalendarAppConfig} from './calendar/CalendarAppConfig';
import {ChatAppConfig} from "./chat/ChatAppConfig";
import {ECommerceAppConfig} from './e-commerce/ECommerceAppConfig';
import {ScrumboardAppConfig} from './scrumboard/ScrumboardAppConfig';
import {AcademyAppConfig} from './academy/AcademyAppConfig';
import _ from '@lodash';
import {authRoles} from 'auth';

function setAdminAuth(configs)
{
    return configs.map(config => _.merge({}, config, {auth: authRoles.admin}))
}

export const appsConfigs = [
    ...setAdminAuth([
        AnalyticsDashboardAppConfig,
        MailAppConfig,
        TodoAppConfig,
        FileManagerAppConfig,
        ContactsAppConfig,
        CalendarAppConfig,
        ChatAppConfig,
        ECommerceAppConfig,
        ScrumboardAppConfig,
        AcademyAppConfig
    ]),      
];
