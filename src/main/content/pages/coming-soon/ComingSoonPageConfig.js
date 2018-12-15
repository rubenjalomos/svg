import {FuseLoadable} from '@fuse';

export const ComingSoonPageConfig = {
    settings: {
        layout: {
            config: {},
            style: 'layout2'
        }
    },
    routes  : [
        {
            path     : '/pages/coming-soon',
            component: FuseLoadable({
                loader: () => import('./ComingSoonPage')
            })
        }
    ]
};
