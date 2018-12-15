import {FuseLoadable} from '@fuse';

export const CalendarAppConfig = {
    settings: {
        layout: {
            config: {},
            style: 'layout1'
        }
    },
    routes  : [
        {
            path     : '/apps/calendar',
            component: FuseLoadable({
                loader: () => import('./CalendarApp')
            })
        }
    ]
};
