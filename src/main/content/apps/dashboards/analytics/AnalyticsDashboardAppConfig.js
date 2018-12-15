import {FuseLoadable} from '@fuse';
import {authRoles} from 'auth';

export const AnalyticsDashboardAppConfig = {
    settings: {
        layout: {            
            config: {},
            style: 'layout1'
        }        
    },    
    routes  : [
        {
            path     : '/apps/dashboards/analytics',
            component: FuseLoadable({
                loader: () => import('./AnalyticsDashboardApp')
            })
        }
    ]
};
