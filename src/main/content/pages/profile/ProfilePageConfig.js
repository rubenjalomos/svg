import {FuseLoadable} from '@fuse';

export const ProfilePageConfig = {
    settings: {
        layout: {
            config: {},
            style:'layout1'
        }
    },
    routes  : [
        {
            path     : '/pages/profile',
            component: FuseLoadable({
                loader: () => import('./ProfilePage')
            })
        }
    ]
};
