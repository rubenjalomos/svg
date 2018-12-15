import {FuseLoadable} from '@fuse';

export const FileManagerAppConfig = {
    settings: {
        layout: {
            config: {},
            style: 'layout1'
        }
    },
    routes  : [
        {
            path     : '/apps/file-manager',
            component: FuseLoadable({
                loader: () => import('./FileManagerApp')
            })
        }
    ]
};
